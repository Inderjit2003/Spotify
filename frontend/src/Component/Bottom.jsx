import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container  } from 'react-bootstrap';
import Style from '../CSS/Home.module.css'

export default function Bottom() {
  return (
    <div >
    <div className={Style.bottom}> 
    <div>
      <Row>
        <Col xs={10}>
          <div className='mx-4 p-0 mb-2  mt-2 text-light '>
            <span className='fw-bold'>Preview to Spotify</span><br />
            <span>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</span>
          </div>
        </Col>
        <Col xs={2}  className="d-flex justify-content-center">
        <div className={` ${Style.list}`}>
        <Button href='/Signup' variant='light' className={`me-4 rounded-pill my-2 p-2 px-4 py-2 fw-bold ${Style.button}`} >Signup</Button>

          </div>
        </Col>
      </Row>
    </div>
 </div>
    </div>
  )
}