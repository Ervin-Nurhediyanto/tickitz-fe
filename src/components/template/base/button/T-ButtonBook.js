import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class ButtonBook extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { handleClick } = this.props
    return (
      <Button
        variant="primary"
        className="w-100 text-white text-decoration-none"
        onClick={(event) => handleClick(event)}
      >
        Book Now
      </Button>
    )
  }
}
export default withRouter(ButtonBook)
