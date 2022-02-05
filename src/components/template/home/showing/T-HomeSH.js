import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import SHtitle from './T-SH-Title'
import SHmovie from './T-SH-Movie'

class HomeSH extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={12} lg={12} className='py-3 bg-gray'>
        <SHtitle/>
        <SHmovie/>
      </Col>
    )
  }
}

export default HomeSH


