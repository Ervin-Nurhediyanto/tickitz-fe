import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Logo from '../T-Logo'
import Logo_Ticket from '../../../../assets/image/tickitz-blue.png'
import NavDrop from './T-NavDropdown'

class NavLogo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={4} lg={2} className="d-flex align-items-center">
        <Row className='d-lg-flex d-none'>
          <Col xs={12} lg={12} className=''>
            <div className='pointer'>
              <Logo image={ Logo_Ticket }/>
            </div>
          </Col>
        </Row>
        <NavDrop/>
      </Col>
    )
  }
}

export default withRouter(NavLogo)
