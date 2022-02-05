import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import HLtext from './T-HL-Text'
import HLimage from './T-HL-Image'

class HomeHL extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={12} lg={12} className=''>
        <Row className='p-0 m-0'>
          <HLtext/>
          <HLimage/>
        </Row>
      </Col>
    )
  }
}

export default HomeHL
