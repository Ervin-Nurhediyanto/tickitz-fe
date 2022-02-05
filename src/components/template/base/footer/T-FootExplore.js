import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

class FootExplore extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={2} lg={2} className="d-flex py-lg-5 py-3">
        <Row className=''>
          <Col xs={12} lg={12} className='mb-2'>
            <h6 className='font-10'><b>Explore</b></h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10 text-muted'>Cinemas</h6>
            <h6 className='d-lg-flex d-none text-muted'>Cinemas</h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10 text-muted'>Movies List</h6>
            <h6 className='d-lg-flex d-none text-muted'>Movies List</h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10 text-muted'>My Ticket</h6>
            <h6 className='d-lg-flex d-none text-muted'>My Ticket</h6>
          </Col>
          <Col xs={12} lg={12}>
            <h6 className='d-lg-none d-flex font-10 text-muted'>Notification</h6>
            <h6 className='d-lg-flex d-none text-muted'>Notification</h6>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default withRouter(FootExplore)
