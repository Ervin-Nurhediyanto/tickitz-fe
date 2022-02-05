import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class HLtext extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <Col xs={6} lg={6} className="d-flex justify-content-center align-items-center bg-infos">
      <Row>
        <Col xs={12} lg={12} className="text-muted">Nearest Cinema, Newest Movie,</Col>
        <Col xs={12} lg={12} className="font-40 text-primary"><b>Find out now!</b></Col>
      </Row>
    </Col>
    )
  }
}

export default HLtext
