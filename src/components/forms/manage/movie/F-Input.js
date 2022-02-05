import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

class FInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { title, data, name, changeText } = this.props
    return (
      <>
        <Row className='p-2 font-16'>
          { title }
        </Row>
        <Row className='p-2 font-16'>
          <input
            name={ name }
            type='text'
            className='p-2 border-radius-4'
            placeholder={data}
            onChange={(event) => { changeText(event) }}
          />
        </Row>
      </>
    )
  }
}

export default FInput
