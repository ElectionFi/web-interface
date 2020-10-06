import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact'
import Countdown from 'react-countdown'

const rCountdown = props => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <MDBCard
        style={{
          backgroundColor: '#f0e7ea',
          fontSize: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <MDBCardTitle className="pt-4">
          <b>
            ElectionFi Purge 🦅 🇺🇸
            {/* <img
              style={{ width: "50px" }}
              src={require("../assets/img/speak.svg")}
            ></img> */}
          </b>
        </MDBCardTitle>
        <MDBCardBody style={{ marginTop: '-25px' }}>
          <MDBRow>
            <MDBCol style={{ padding: '0px 25px 0px 25px' }}>
              <MDBRow>
                <b>{days}</b>
              </MDBRow>
              <MDBRow>Days</MDBRow>
            </MDBCol>
            <MDBCol style={{ padding: '0px 25px 0px 25px' }}>
              <MDBRow>
                <b>{hours}</b>
              </MDBRow>
              <MDBRow>Hours</MDBRow>
            </MDBCol>
            <MDBCol style={{ padding: '0px 25px 0px 25px' }}>
              <MDBRow>
                <b>{minutes}</b>
              </MDBRow>
              <MDBRow>Minutes</MDBRow>
            </MDBCol>
            <MDBCol style={{ padding: '0px 25px 0px 25px' }}>
              <MDBRow>
                <b>{seconds}</b>
              </MDBRow>
              <MDBRow>Seconds</MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    )
  }
  return (
    <div
      onClick={props.onClick}
      className={
        props.isPoll ? 'wow flipOutX animated' : 'wow flipInX animated'
      }
    >
      <Countdown date={'2020-11-03'} renderer={renderer} />
    </div>
  )
}

export default rCountdown
