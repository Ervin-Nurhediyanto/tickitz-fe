import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Logo from '../T-Logo'
import Logo_EbuId from '../../../../assets/image/ebv.id 2.png'
import Logo_CineOne21 from '../../../../assets/image/CineOne21 2.png'
import Logo_hiflix from '../../../../assets/image/hiflix 2.png'

class FootSponsor extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={2} lg={2} className="d-flex p-lg-5 py-3 ">
        <Row className=''>
          <Col xs={12} lg={12} className='mb-0 py-0'>
            <h6 className='font-10'><b>Our Sponsore</b></h6>
          </Col>
          <Col xs={12} lg={12} className=''>
            <Row>
              <Col className="d-flex p-lg-4 py-3">
                <Logo image={ Logo_EbuId }/>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={12} className=''>
            <Row>
              <Col className="d-flex p-lg-4 py-3">
                <Logo image={ Logo_CineOne21 }/>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={12} className=''>
            <Row>
              <Col className="d-flex p-lg-4 py-3">
                <Logo image={ Logo_hiflix }/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default withRouter(FootSponsor)
