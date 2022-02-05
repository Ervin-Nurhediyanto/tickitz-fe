import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import CardMovie from '../../base/card/T-CardMovie'

class DMimage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { movie } = this.props
    return (
    <Col xs={12} sm={4} lg={4} className=''>
      <Row className="d-flex justify-content-center">
        <Col xs={12} lg={6} className='my-2'>
          <CardMovie
            id={ movie.id }
            image={ movie.image }
            name={ movie.title }
            category={ movie.category }
          />
        </Col>
      </Row>
    </Col>
    )
  }
}

export default DMimage
