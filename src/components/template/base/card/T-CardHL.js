import React, { Component } from 'react'

class CardHL extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { image } = this.props
    return (
      <div className="h-40vh border-radius-25 box-shadow-2">
        <img
          src={ image }
          alt="card_highlight"
          className="img border-radius-25"
        />
      </div>
    )
  }
}

export default CardHL
