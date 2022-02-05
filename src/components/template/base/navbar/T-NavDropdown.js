import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../T-Logo'
import Logo_Ticket from '../../../../assets/image/tickitz-blue.png'

class NavDrop extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Nav pullRight className='d-lg-none d-flex'>
        <NavDropdown
          eventKey={1}
          title={ <Logo image={ Logo_Ticket }/> }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item eventKey="4.1">Home</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Payment</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Profile</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Dashboard</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5">Manage Movie</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.6">Manage Schedule</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    )
  }
}

export default withRouter(NavDrop)