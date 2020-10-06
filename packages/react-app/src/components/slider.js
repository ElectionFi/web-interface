import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'

function Slider(props) {
  const poll = parseFloat(props.data).toFixed(3)
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Votes',
        backgroundColor: 'rgba(255,99,132,0.8)',
        borderColor: 'rgba(255,99,132,1)',
        hoverBackgroundColor: 'rgba(255,99,132,0.8)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        barPercentage: 0.7,
        data: [props.data],
      },
    ],
  }
  const options = {
    responsive: true,
    tooltips: {
      enabled: false,
    },
    enabled: false,
    legend: {
      labels: {
        display: false,
        generateLabels: false,
      },
    },
    labels: {},
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'black',
            zeroLineColor: 'red',
            display: false,
          },
          ticks: {
            display: false,
            min: -1,
            max: 1,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  }
  return (
    <div
      onClick={props.onClick}
      className={
        props.isPoll ? 'wow flipInX animated' : 'wow flipOutX animated'
      }
      style={{
        height: '139px',
        cursor: 'pointer',
      }}
    >
      <MDBRow style={{ justifyContent: 'center', alignItems: 'center' }}>
        <MDBCol>
          <img
            style={{
              width: '35px',
              marginRight: '10px',
              marginTop: '-10px',
            }}
            src={require('../assets/img/trump.png')}
          ></img>
        </MDBCol>
        <MDBCol>
          <HorizontalBar data={data} options={options} />
        </MDBCol>
        <MDBCol>
          <img
            style={{
              width: '40px',
              marginRight: '10px',
              marginTop: '-10px',
            }}
            src={require('../assets/img/biden.png')}
          ></img>
        </MDBCol>
      </MDBRow>
      <MDBRow
        style={{
          display: 'flex',
          justifyContent: 'space-between !important',
          // alignItems: 'center',
          marginTop: '-20px',
          fontSize: '20px',
        }}
      >
        <MDBCol>
          {props.trumpPoll >= 0.5 ? (
            <div>
              <span style={{ color: 'green' }}>{`${(
                100 * parseFloat(props.trumpPoll)
              ).toFixed(3)}% `}</span>
              <b>{`yDON`}</b>
            </div>
          ) : (
            <div>
              <span style={{ color: 'red' }}>{`${(
                100 * parseFloat(props.trumpPoll)
              ).toFixed(3)}% `}</span>
              <b>{`yDON`}</b>
            </div>
          )}
        </MDBCol>
        <MDBCol
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            float: 'right !important',
          }}
        >
          {props.bidenPoll >= 0.5 ? (
            <div>
              <span style={{ color: 'green' }}>{`${(
                100 * parseFloat(props.bidenPoll)
              ).toFixed(3)}% `}</span>
              <b>{`yJOE`}</b>
            </div>
          ) : (
            <div>
              <span style={{ color: 'red' }}>{`${(
                100 * parseFloat(props.bidenPoll)
              ).toFixed(3)}% `}</span>
              <b>{`yJOE`}</b>
            </div>
          )}
        </MDBCol>
      </MDBRow>
    </div>
  )
}
export default Slider
