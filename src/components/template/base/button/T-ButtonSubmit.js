import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class ButtonSubmit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { handleClick, text } = this.props
    return (
      <Button
        variant="primary"
        className="w-100 text-white text-decoration-none"
        onClick={(event) => handleClick(event)}
      >
        { text }
      </Button>
    )
  }
}
export default withRouter(ButtonSubmit)
