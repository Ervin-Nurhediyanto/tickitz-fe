import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col } from 'react-bootstrap'

class NMhome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <Col
        xs={2} lg={2}
        className='d-flex align-items-center pointer'
        onClick={() => {this.handleClick()}}
      >
        Home
      </Col>
    )
  }
}

export default withRouter(NMhome)
