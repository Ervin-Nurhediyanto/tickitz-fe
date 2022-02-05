import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class DMinfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { movie } = this.props
    return (
    <Col xs={12} sm={8} lg={8} className='mt-2'>
      <div className="font-20"><b>{ movie.title }</b></div>
      <div className="font-10 text-muted">{ movie.category }</div>
      <Row className="mt-3">
        <Col sm={4} lg={3}>
          <Row>
            <Col lg={12} className='text-muted'>Release date</Col>
            <Col lg={12}>{ movie.releaseDate }</Col>
          </Row>
          <Row className='mt-3 mb-3'>
            <Col lg={12} className='text-muted'>Duration</Col>
            <Col lg={12}>{ movie.duration } minutes</Col>
          </Row>
        </Col>
        <Col sm={8} lg={9}>
          <Row>
            <Col lg={12} className='text-muted'>Directed by</Col>
            <Col lg={12}>{ movie.director }</Col>
          </Row>
          <Row className="mt-3">
            <Col lg={12} className="text-muted">Casts</Col>
            <Col lg={12}>{ movie.cast }</Col>
          </Row>
        </Col>
      </Row>
      <hr/>
      <div><b>Synopsis</b></div>
      <div className="mt-3 text-gray text-justify">{ movie.synopsis }</div>
    </Col>
    )
  }
}

export default DMinfo
