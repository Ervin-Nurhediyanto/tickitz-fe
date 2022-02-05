import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class TMMtitle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={7} lg={9} className='mt-3 font-24'>
        <b>Data Movie</b>
      </Col>
    )
  }
}

export default TMMtitle
