import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import FReset from '../../components/forms/F-Reset'

class Reset extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <div>
        <Row className='h-100vh w-100 bg-avengers'>
          <Col xs={12} lg={4} className='py-5 px-5 bg-white'>
            <h2 className='my-3'>Reset Password</h2>
            <h6 className="my-3 font-10">Fill your new password</h6>
            <FReset />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Reset
