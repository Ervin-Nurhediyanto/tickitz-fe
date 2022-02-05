import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Datepicker from '../../base/datepicker/T-Datepicker'

class DTdatepicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ticketDate: ''
    }
  }

  render() {
    const { selectDate } = this.props
    return (
      <Col xs={9} sm={4} lg={2} className=''>
        <Datepicker
          class={'m-2 p-2 text-center border-radius-10 bg-gray-2 pointer'}
          selectDate={ selectDate }
        />
      </Col>
    )
  }
}

export default DTdatepicker
