import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class TMMtitle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { handleSearch } = this.props
    return (
      <Col xs={4} lg={2} className='mt-3 border border-1 border-gray border-radius-10 bg-white'>
        <input
          className='w-100 p-1 px-2 font-16 border-0'
          placeholder='Search Movie Name ...'
          onChange={(event) => { handleSearch(event) }}
        />
      </Col>
    )
  }
}

export default TMMtitle
