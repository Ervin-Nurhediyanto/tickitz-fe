import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Nav, NavDropdown } from 'react-bootstrap'

class NavProfD extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleLogout = () => {
    const items = { ...localStorage }
    Object.keys(items).map((item) => {
      return localStorage.removeItem(item)
    })
    this.props.history.push('/signin')
  }

  render() {
    return (
      <Col xs={2} lg={2} className="px-3 py-2">
        <Nav variant="pills" className='d-flex justify-content-end'>
          <NavDropdown title="Username" id="nav-dropdown" className='d-lg-inline'>
            <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item eventKey="4.2" onClick={() => this.handleLogout() }>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
    )
  }
}

export default withRouter(NavProfD)
