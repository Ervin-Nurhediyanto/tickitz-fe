import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import UPtitle from './T-UP-Title'
import UPmovie from './T-UP-Movie'

class HomeUP extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={12} lg={12} className='py-3 bg-white'>
        <UPtitle/>
        <UPmovie/>
      </Col>
    )
  }
}

export default HomeUP


