import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube
} from "react-icons/fi";

class FootFollow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={4} lg={4} className="d-flex p-lg-5 py-3">
        <Row className=''>
          <Col xs={12} lg={12} className='mb-2'>
            <h6 className='font-10'><b>Follow us</b></h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10'>
              <FiFacebook/>
              <span className='mx-2'>Tickitz Cinema id</span>
            </h6>
            <h6 className='d-lg-flex d-none'>
              <FiFacebook/>
              <span className='mx-2'>Tickitz Cinema id</span>
            </h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10'>
              <FiInstagram/>
              <span className='mx-2'>tickitz.id</span>
            </h6>
            <h6 className='d-lg-flex d-none'>
              <FiInstagram/>
              <span className='mx-2'>tickitz.id</span>
            </h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10'>
              <FiTwitter/>
              <span className='mx-2'>tickitz.id</span>
            </h6>
            <h6 className='d-lg-flex d-none'>
              <FiTwitter/>
              <span className='mx-2'>tickitz.id</span>
            </h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10'>
              <FiYoutube/>
              <span className='mx-2'>Tickitz Cinema id</span>
            </h6>
            <h6 className='d-lg-flex d-none'>
              <FiYoutube/>
              <span className='mx-2'>Tickitz Cinema id</span>
            </h6>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default withRouter(FootFollow)
