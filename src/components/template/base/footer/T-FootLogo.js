import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Logo from '../T-Logo'
import Logo_Ticket from '../../../../assets/image/tickitz-blue.png'

class FootLogo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={4} lg={4} className="d-flex pt-lg-5 py-0">
        <Row className=''>
          <Col xs={12} lg={12} className='d-flex justify-content-center align-items-center'>
            <div className=''>
              <Logo image={ Logo_Ticket }/>
            </div>
          </Col>
          <Col xs={12} lg={12} className='d-flex justify-content-center mx-lg-0 mx-sm-4 mx-0'>
            <h6 className='font-10'>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</h6>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default withRouter(FootLogo)
