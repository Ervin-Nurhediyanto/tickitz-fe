import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import CardHL from '../../base/card/T-CardHL'
import image_01 from '../../../../assets/image/hl1.png'
import image_02 from '../../../../assets/image/hl2.png'
import image_03 from '../../../../assets/image/hl3.png'

class HLimage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <Col xs={6} lg={6} className=''>
      <Row className="d-flex justify-content-end">
        <Col xs={4} lg={2} className='mt-5 mb-2'>
          <CardHL image={ image_01 }/>
        </Col>
        <Col xs={4} lg={2} className='mt-2'>
          <CardHL image={ image_02 }/>
        </Col>
        <Col xs={4} lg={2} className='mt-5 mb-2'>
          <CardHL image={ image_03 }/>
        </Col>
      </Row>
    </Col>
    )
  }
}

export default HLimage
