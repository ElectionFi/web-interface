import React from 'react'
import { Body, Button } from './'
import Navbar from './navbar'

const About = () => {
  return (
    <div>
      <Body>
        <Navbar />

        <h1 className="first-about">
          🇺🇸
          <b>Politics Meets Yield Farming 🇺🇸</b>
        </h1>

        <div className="description">
          <p>
            <ul style={{ listStyleType: 'none' }}>
              <li>No Presale or VC backing</li>
              <li>50k hard capped supply each, no additional minting</li>
              <li>93% of supply is rewarded to liquidity providers</li>
              <li>1 rebase on election day</li>
            </ul>
          </p>
        </div>
        <br></br>
        <h1>
          <b>What is Election.finance?</b>
        </h1>

        <div className="description">
          <p>
            As much as we love sushi 🍣 and kimchi{' '}
            <img
              style={{ width: '30px' }}
              src={require('../assets/img/kimchi.png')}
            />
            , we wanted to create something more substantial. Let's spice things
            up a little bit. Who do you think will win the U.S presidential
            election? We have created two tokens representing the 2 presidential
            candidates. The winning candidate will be rebased 10x and the losing
            candidate will be negative rebased (-90%). Are you on team yJoe or
            yDon?
          </p>
        </div>
        <br />
        <h1>
          <b>How does this all work?</b>
        </h1>
        <div className="description">
          <p>
            93% of the token will be rewarded to liquidity providers over a
            period of 2 months leading up to the election. You can receive yDON
            and yJOE by staking DAI in our initial seed pool (10000 yDON and
            yJOE). We will be adding other pools soon UNI, BAL, ETH, LINK, YFI
            (36500 yDON and yJOE). The token corresponding to the winner will be
            rebased 1000% and the loser rebased -90%. We have constructed a time
            lock on the rebase method. It can only be called when the minute
            hits November 3 2020. We will rebase depending on the electoral
            college vote. Next steps are to introduce decentralized Governance.
            Please DM us on twitter @ElectFi if you have suggestions or feedback
            😇
          </p>
        </div>
        <br />
        {/* Transactions & Addresses
 Token Address:
 Set Owner as minter TX:
 Mint 50,000 Tokens TX:
 Remove Owner as minter TX:
 Admin Keys Burn TX:
5000 Tokens to Pool A TX:
 Uniswap Liquidity lock TX to Pool B:
 Pool A Address:
 Pool B Address: */}
      </Body>
    </div>
  )
}

export default About
