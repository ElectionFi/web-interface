import React from 'react'

import trumpLogo from './assets/img/trump.png'
import bidenLogo from './assets/img/biden.png'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useQuery } from '@apollo/react-hooks'
import Token from './components/token.js'
import Navbar from './components/navbar.js'
import Countdown from './components/countdown'
import Footer from './components/footer'
import { Body, Button, Image } from './components'
import { addresses, abis } from '@project/contracts'
import GET_TRANSFERS from './graphql/subgraph'
import { MDBRow, MDBCol, MDBContainer, MDBCard } from 'mdbreact'
import Slider from './components/slider'
import Confetti from 'react-dom-confetti'

const config = {
  angle: '247',
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: '14',
  width: '16px',
  height: '20px',
  perspective: '684px',
  colors: ['#3C3B6E', '#FFFFFF', '#B22234'],
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS)
  const [address, setAddress] = React.useState(null)
  const [provider, setProvider] = React.useState(0)
  const [bidenBalance, setBidenBalance] = React.useState(0)
  const [trumpBalance, setTrumpBalance] = React.useState(0)
  const [ethBalance, setEthBalance] = React.useState(0)
  const [trumpPoll, setTrumpPoll] = React.useState(0.5)
  const [bidenPoll, setBidenPoll] = React.useState(0.5)
  const [rating, setRating] = React.useState(null)
  const [startConfetti, setStartConfetti] = React.useState(false)
  const [isPoll, setIsPoll] = React.useState(false)
  const [timeoutIsPoll, setTimeoutIsPoll] = React.useState(false)
  const [currentBidenPool, setCurrentBidenPool] = React.useState(
    addresses.bidenPools[0],
  )
  const [currentTrumpPool, setCurrentTrumpPool] = React.useState(
    addresses.trumpPools[0],
  )

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers })
    }
    readOnChainData()
    setTimeout(() => {
      setStartConfetti(true)
    }, 500)
    setInterval(async () => {
      await readOnChainData()
    }, 15000)
  }, [loading, error, data])

  async function onPollSwitch() {
    setIsPoll(!isPoll)
    setTimeout(() => {
      setTimeoutIsPoll(!timeoutIsPoll)
    }, 500)
  }

  async function readOnChainData() {
    if (!window.ethereum) {
      return
    }

    try {
      // const defaultProvider = new JsonRpcProvider("http://localhost:7545");
      const provider = new Web3Provider(window.ethereum)
      const accounts = await provider.listAccounts()
      const address = accounts[0]

      setAddress(address)
      setProvider(provider)

      const trumpErc20 = new Contract(
        addresses.trumpERC20,
        abis.mintableErc20,
        provider,
      )
      const trumpBalance = await trumpErc20.balanceOf(address)
      setTrumpBalance(trumpBalance.toString() / 1e18)

      const bidenErc20 = new Contract(
        addresses.bidenErc20,
        abis.mintableErc20,
        provider,
      )
      const bidenBalance = await bidenErc20.balanceOf(address)
      setBidenBalance(bidenBalance.toString() / 1e18)

      const yearnTot = new Contract(addresses.yearnTot, abis.yearn, provider)
      const yearnTob = new Contract(addresses.yearnTob, abis.yearn, provider)

      const bidenAmountStaked = (await yearnTob.totalSupply()).toString() / 1e18
      const trumpAmountStaked = (await yearnTot.totalSupply()).toString() / 1e18
      const bidenRating =
        bidenAmountStaked / (trumpAmountStaked + bidenAmountStaked)
      const trumpRating =
        trumpAmountStaked / (trumpAmountStaked + bidenAmountStaked)
      const rating =
        (bidenAmountStaked - trumpAmountStaked) /
        (trumpAmountStaked + bidenAmountStaked)

      setTrumpPoll(trumpRating)
      setBidenPoll(bidenRating)

      setRating(rating)
      // const ethBalance = await provider.getBalance(address)
      // setEthBalance(ethBalance.toString())
    } catch {
      console.log('Unable to get balances')
    }
  }

  async function walletConnect() {
    if (window.ethereum) {
      await window.ethereum.enable()
      const provider = new Web3Provider(window.ethereum)
      const accounts = await provider.listAccounts()
      setAddress(accounts[0])

      await readOnChainData()
      return
    }
    alert('You must install metamask to use this app')
  }

  return (
    <Body className="wow fadeIn animated">
      <Navbar
        onClick={() => walletConnect()}
        pollClick={onPollSwitch}
        address={address}
      />
      <h1 style={{ fontSize: '60px' }}>Election.Finance</h1>
      {timeoutIsPoll ? (
        <Slider
          onClick={onPollSwitch}
          isPoll={isPoll}
          data={rating}
          trumpPoll={trumpPoll}
          bidenPoll={bidenPoll}
        />
      ) : (
        <Countdown onClick={onPollSwitch} isPoll={isPoll} />
      )}

      <Confetti active={startConfetti} config={config} />

      {/* <b>Only Time Will Tell</b> */}
      <div className="token-container">
        <MDBRow>
          <MDBCol className="wow bounceInLeft animated">
            <MDBCard style={{ backgroundColor: '#eee' }} className="token-item">
              <div style={{ textAlign: 'center !important' }}>
                <Image src={trumpLogo} alt="react-logo" className="center" />
              </div>
              <a href={`https://etherscan.io/address/${addresses.trumpERC20}`}>
                {'yDON'}
              </a>
              <p>
                <b>Balance: </b>

                {trumpBalance > 0
                  ? `${parseFloat(trumpBalance).toFixed(3)}`
                  : `0.00 ${'yDON'}`}
              </p>
              <Token
                animation={'bounceInLeft'}
                logo={trumpLogo}
                alt="react-logo"
                name="yDON"
                balance={trumpBalance}
                erc20Address={addresses.trumpErc20}
                pool={addresses.trumpPools[0]}
                address={addresses.trumpERC20}
                provider={provider}
              />
              <Token
                animation={'bounceInLeft'}
                logo={trumpLogo}
                alt="react-logo"
                name="yDON"
                balance={trumpBalance}
                erc20Address={addresses.trumpERC20}
                pool={addresses.trumpPools[1]}
                address={addresses.trumpERC20}
                provider={provider}
              />
            </MDBCard>
          </MDBCol>
          <MDBCol className="wow bounceInRight animated">
            <MDBCard style={{ backgroundColor: '#eee' }} className="token-item">
              <div style={{ textAlign: 'center !important' }}>
                <Image src={bidenLogo} alt="react-logo" className="center" />
              </div>
              <a href={`https://etherscan.io/address/${addresses.bidenErc20}`}>
                {'yJOE'}
              </a>
              <p>
                <b>Balance: </b>

                {trumpBalance > 0
                  ? `${parseFloat(bidenBalance).toFixed(3)}`
                  : `0.00 ${'yJOE'}`}
              </p>
              <Token
                animation={'bounceInRight'}
                logo={bidenLogo}
                alt="react-logo"
                name="yJOE"
                balance={bidenBalance}
                erc20Address={addresses.bidenErc20}
                pool={addresses.bidenPools[0]}
                address={addresses.bidenErc20}
                provider={provider}
              />
              <Token
                animation={'bounceInRight'}
                logo={bidenLogo}
                alt="react-logo"
                name="yJOE"
                balance={bidenBalance}
                erc20Address={addresses.bidenErc20}
                pool={addresses.bidenPools[1]}
                address={addresses.bidenErc20}
                provider={provider}
              />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <Footer />
    </Body>
  )
}

export default App
