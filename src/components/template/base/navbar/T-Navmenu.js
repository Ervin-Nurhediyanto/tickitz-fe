import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Home from './menu/T-NM-Home'
import ManageMovie from './menu/T-NM-ManageMovie'
// import ManageSchedule from './menu/T-NM-ManageSchedule'

class NavMenuD extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={6} lg={8} className='d-lg-flex d-flex p-2'>
      <Row className='d-lg-flex d-none m-0 w-100' >
        <Home/>
        <ManageMovie/>
        {/* <ManageSchedule/> */}
        {/* <Col xs={2} lg={2} className='d-flex align-items-center pointer'>Payment</Col> */}
        {/* <Col xs={2} lg={2} className='d-flex align-items-center pointer'>Profile</Col> */}
        {/* <Col xs={2} lg={2} className='d-flex align-items-center pointer'>Dashboard</Col> */}
      </Row>
      </Col>
    )
  }
}

export default withRouter(NavMenuD)
