import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import FootLogo from './T-FootLogo'
import FootExplore from './T-FootExplore'
import FootSponsor from './T-FootSponsor'
import FootFollow from './T-FootFollow'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={12} lg={12}>
        <Row className='p-0 m-0'>
          <FootLogo/>
          <FootExplore/>
          <FootSponsor/>
          <FootFollow/>
        </Row>
        <Row className='d-flex justify-content-center my-0 font-10'>
          © 2022 Tickitz. All Rights Reserved.
        </Row>
      </Col>
    )
  }
}

export default withRouter(Footer)
