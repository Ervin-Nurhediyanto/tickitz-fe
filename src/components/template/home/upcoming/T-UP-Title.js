import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

class UPtitle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Row className='p-0 mx-5'>
        <h4 className='font-20 text-dark'>
          <b><u>Upcoming Movies</u></b>
        </h4>
      </Row>
    )
  }
}

export default UPtitle
