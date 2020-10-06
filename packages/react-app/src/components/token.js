import React, { useEffect, useState } from 'react'
import { Button, Image } from './'
import { addresses, abis } from '@project/contracts'
import { Contract } from '@ethersproject/contracts'
import ethers from 'ethers'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from 'mdbreact'

const Token = props => {
  const [stakeAmount, setStakeAmount] = useState(0)
  const [amountStaked, setAmountStaked] = useState(0)
  const [lpAmount, setLpAmount] = useState(0)
  const [claimableRewards, setclaimableRewards] = useState(0)
  const [APY, setAPY] = useState(0)

  useEffect(() => {
    getAmountStaked()
    getLPAmount()
    setInterval(async () => {
      await getAmountStaked()
      await getLPAmount()
    }, 15000)
  }, [props])

  const getLPAmount = async () => {
    try {
      const uni = new Contract(
        props.pool.lpToken,
        abis.uniswapPair,
        props.provider.getSigner(),
      )
      const accounts = await props.provider.listAccounts()
      const address = accounts[0]

      const balance = await uni.balanceOf(address)
      const fmtBalance = ethers.utils.formatUnits(balance)
      setLpAmount(fmtBalance)
    } catch {}
  }

  const approve = async () => {
    try {
      const uni = new Contract(
        props.pool.lpToken,
        abis.uniswapPair,
        props.provider.getSigner(),
      )
      const uintBalance = ethers.utils.parseUnits('10000000', 18).toString()
      await uni.approve(props.pool.yearn, uintBalance)
    } catch {
      console.log('err')
    }
  }

  const stake = async () => {
    try {
      const yearn = new Contract(
        props.pool.yearn,
        abis.yearn,
        props.provider.getSigner(),
      )
      if (stakeAmount <= 0) {
        throw Error('stake is 0')
      }
      const uintAmount = ethers.utils.parseUnits(stakeAmount, 18).toString()
      console.log(uintAmount)
      const send = await yearn.stake(uintAmount)
      console.log(send)
    } catch {
      if (stakeAmount == 0) {
        alert("Can't stake 0 amount")
      } else {
        alert('Problem Staking, make sure you have approved this txn')
        console.log('err')
      }
    }
  }

  const getAmountStaked = async () => {
    try {
      const accounts = await props.provider.listAccounts()
      const address = accounts[0]

      const yearn = new Contract(
        props.pool.yearn,
        abis.yearn,
        props.provider.getSigner(),
      )

      const balance = await yearn.balanceOf(address)
      const fmtBalance = ethers.utils.formatUnits(balance)
      setAmountStaked(fmtBalance)

      const reward = await yearn.rewardPerToken()
      const fmtReward = ethers.utils.formatUnits(reward)
      // console.log(fmtReward)
      if (fmtReward != '0.0') {
        setAPY(fmtReward * 100)
      }

      const userRewards = await yearn.earned(address)
      const fmtUserRewards = ethers.utils.formatUnits(userRewards)
      setclaimableRewards(fmtUserRewards)
    } catch {
      //this errs periodically
    }
  }

  const exit = async () => {
    try {
      const yearn = new Contract(
        props.pool.yearn,
        abis.yearn,
        props.provider.getSigner(),
      )
      await yearn.exit()
    } catch {
      if (amountStaked == 0) {
        alert('Nothing Staked')
      }
      console.log('Unable to exit')
    }
  }

  return (
    <div className={`wow ${props.animation} animated`}>
      <MDBCard
        border="none"
        style={{ backgroundColor: '#eee', border: 'none' }}
        className="token-item"
      >
        {/* <div style={{ textAlign: 'center !important' }}>
            <Image src={props.logo} alt="react-logo" className="center" />
          </div>
          <MDBCardTitle>
            <a href={`https://etherscan.io/address/${props.address}`}>
              {props.name}
            </a>
          </MDBCardTitle> */}
        <MDBCardTitle className="poolImg">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {'     '}
            {/* <h2>
              <b>{props.pool.name}</b>
            </h2> */}
            <img
              style={{ width: '70px', marginRight: '-20px', zIndex: 3 }}
              src={props.logo}
            ></img>
            <img style={{ width: '70px' }} src={props.pool.pairLogo}></img>
          </div>
        </MDBCardTitle>
        <MDBCardBody>
          <MDBCardText>
            <div className="token-stats">
              {/* <p>
                <b>Balance: </b>
                {props.balance > 0
                  ? `${parseFloat(props.balance).toFixed(4)}`
                  : `0.00 ${props.name}`}
              </p> */}
              {props.pool.uniURL ? (
                <i
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(props.pool.uniURL)}
                >
                  Uniswap Pair 🦄🔗
                </i>
              ) : (
                <div />
              )}

              <p>
                <b>Claimable: </b> {parseFloat(claimableRewards).toFixed(3)}{' '}
                <b>{props.name}</b>
              </p>
              <p>
                <b>{`Wallet ${props.pool.name}:`}</b>
                {lpAmount > 0 ? `${parseFloat(lpAmount).toFixed(3)}` : `0.00 `}
              </p>
              <p>
                <b>Total Staked:</b> {`${amountStaked}`}
              </p>
              <p>
                <b>Apy: </b>
                {APY ? `${parseFloat(APY).toFixed(3)}%` : 'Connect Wallet'}
              </p>
            </div>
            <MDBInput
              style={{ textAlign: 'center' }}
              label={`Stake ${props.pool.name} to earn ${props.name}`}
              onChange={e => setStakeAmount(e.target.value)}
            >
              {' '}
              {/* <img style={{ width: '40px' }} src={props.logo}></img>
              <img
                style={{ width: '40px' }}
                src={require('../assets/img/dai.svg')}
              ></img> */}
            </MDBInput>
            <MDBRow>
              <MDBCol>
                <Button onClick={() => approve()}>Approve</Button>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <Button onClick={() => stake()}>Stake</Button>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <Button onClick={() => exit()}>Exit</Button>
              </MDBCol>
            </MDBRow>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default Token
