import React from 'react'
import { Button } from './'
import { Link } from 'react-router-dom'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
} from 'darkreader'

const styles = {
  borderRadius: '20px',
  border: '5px solid black',
}

const Navbar = props => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  async function toggleDarkMode() {
    if (isDarkMode) {
      disableDarkMode()
      setIsDarkMode(false)
    } else {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      })
      setIsDarkMode(true)
    }
  }
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        marginBottom: -20,
        padding: '40px',
      }}
    >
      <Link to="/" className="ml-5">
        Election.Finance
      </Link>
      <Link to="/#" className="ml-5" onClick={() => props.pollClick()}>
        Poll
      </Link>
      <Link
        to="/#"
        className="ml-5"
        onClick={() =>
          (window.location.href =
            'https://medium.com/@electionfinance/election-fi-yield-farming-meets-politics-%EF%B8%8F-d870507e206d')
        }
      >
        About
      </Link>
      <div className="nav" style={{ float: 'right' }}>
        <label style={{ marginRight: '40px' }}>
          <Toggle
            defaultChecked={isDarkMode}
            icons={false}
            onChange={toggleDarkMode}
          />
        </label>
        {props.address ? (
          `${props.address.substring(0, 6)}...${props.address.substring(
            38,
            42,
          )}`
        ) : (
          <Button onClick={props.onClick}>Connect Wallet</Button>
        )}
      </div>
    </div>
  )
}

export default Navbar
