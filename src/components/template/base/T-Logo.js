import React, { Component } from 'react'

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { image } = this.props
    return (
      <img src={ image } alt="Logo" className="img"/>
    )
  }
}

export default Logo
