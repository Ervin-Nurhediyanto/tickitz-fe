import React, { Component } from 'react'
import { Row, Col }from 'react-bootstrap'

class ButtonTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      select: ''
    }
  }

  handleClick = (index) => {
    this.setState({select: index})
  }

  render() {
    const { ticket } = this.props
    const { select } = this.state
    return (
      <Row>
        {
          ticket.times.split(",").map((time, index) => {
            return (
              <Col key={ index } xs={6} lg={3} className="my-2">
                {
                  select === index
                  ? <div
                      className='text-primary pointer'
                      onClick={() => { this.handleClick(index)}}
                    >
                      {time}
                    </div>
                  : <div
                      className='text-secondary pointer'
                      onClick={() => { this.handleClick(index)}}
                    >
                      {time}
                    </div>
                }
              </Col>
            )
          })
        }
      </Row>
    )
  }
}

export default ButtonTime
