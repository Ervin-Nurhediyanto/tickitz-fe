import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter  } from 'react-router'
import DTtitle from './T-DT-Title'
import DTschedule from './T-DT-Schedule'

class DetailTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={12} lg={12} className='bg-gray'>
        <Row className='p-0 m-0'>
          <DTtitle/>
          <DTschedule/>
        </Row>
      </Col>
    )
  }
}

export default withRouter(DetailTicket)
