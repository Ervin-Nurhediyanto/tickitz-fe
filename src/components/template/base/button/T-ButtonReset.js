import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class ButtonReset extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { handleClick } = this.props
    return (
      <Button
        variant="primary"
        className="w-100 text-primary bg-transparent text-decoration-none"
        onClick={(event) => handleClick(event)}
      >
        Reset
      </Button>
    )
  }
}
export default withRouter(ButtonReset)
