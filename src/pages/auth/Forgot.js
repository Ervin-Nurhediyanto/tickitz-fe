import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import FForgot from '../../components/forms/F-Forgot'

class Forgot extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <Row className="h-100vh w-100 bg-avengers">
        <Col xs={12} lg={4} className="py-5 px-5 bg-white">
          <h2 className="my-3">Fill your complete email</h2>
          <h4 className="my-3 font-10 font-w-100">we'll send a link to your email shortly</h4>
          <FForgot />
          <div className='mt-5 py-1'>
              <Link
                to="/signin" className='text-decoration-none'
              >
                Sign In Now
              </Link>
            </div>
        </Col>
      </Row>
    )
  }
}

export default Forgot
