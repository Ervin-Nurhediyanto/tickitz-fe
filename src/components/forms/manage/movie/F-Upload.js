import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import CardMovie from '../../../template/base/card/T-CardMovie'
import Update from '../../../../assets/image/update.jpg'

class FUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data, handleClick } = this.props
    return(
      <Row className='w-100'>
        <Col lg={12}>
          {
            typeof(data.image) === 'object'
            ? <CardMovie
                id={ data.id }
                image={ Update }
                name={ data.title }
                category={ data.category }
              />
            : <CardMovie
                id={ data.id }
                image={ data.image }
                name={ data.title }
                category={ data.category }
              />
          }
        </Col>
        <Col lg={12} className='mt-3'>
          <input
            type='file'
            onChange={(event) => { handleClick(event) }}
          />
        </Col>
      </Row>
    )
  }
}

export default FUpload
