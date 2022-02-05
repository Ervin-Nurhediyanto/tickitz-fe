import React, { Component } from 'react'
import { Col, Nav, NavDropdown } from 'react-bootstrap'

class DTlocation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data, handleClick } = this.props
    return (
      <Col xs={7} sm={4} lg={2} className=''>
        <Nav variant="" className='w-200px m-2 border border-1 border-dark border-radius-10 bg-gray-2 '>
          <NavDropdown title='Location' id="nav-dropdown">
            { data.map((item, index) => {
              return (
                <NavDropdown.Item
                  key={index}
                  eventKey={index}
                  onClick={() => { handleClick(item.id) }}
                >
                { item.city }
                </NavDropdown.Item>
              )
            })}
          </NavDropdown>
        </Nav>
      </Col>
    )
  }
}

export default DTlocation
