import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import NavLogo from './T-NavLogo'
import NavMenu from './T-Navmenu'
import NavProf from './T-NavProf'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Col xs={12} lg={12} className="box-shadow-1">
        <Row className='p-0 m-0'>
          <NavLogo/>
          <NavMenu/>
          <NavProf/>
        </Row>
      </Col>
    )
  }
}

export default withRouter(Navbar)
