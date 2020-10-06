import React from 'react'
import { MDBRow, MDBCol, MDBFooter, MDBContainer, MDBIcon } from 'mdbreact'

const Footer = () => {
  return (
    <div>
      <MDBFooter style={{ backgroundColor: 'black' }}>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <a href="https://twitter.com/ElectFi?s=20">
                <MDBIcon fab icon="twitter"></MDBIcon>
              </a>
            </MDBCol>
            <MDBCol>
              <a href="https://t.me/electionfinance">
                <MDBIcon fab icon="telegram"></MDBIcon>
              </a>
            </MDBCol>
            <MDBCol>
              <a href="https://medium.com/@electionfinance/election-fi-yield-farming-meets-politics-%EF%B8%8F-d870507e206d">
                <MDBIcon fab icon="medium"></MDBIcon>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  )
}

export default Footer
