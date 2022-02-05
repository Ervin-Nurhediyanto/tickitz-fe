import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import FSignUp from '../../components/forms/F-SignUp'

class SignUp extends Component {
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
        <Row className="h-100vh w-100 bg-avengers">
          <Col xs={12} lg={4} className="py-5 px-5 bg-white">
            <h2 className="my-3">Sign Up</h2>
            <h6 className="my-3 font-10">Fill your additional details</h6>
            <FSignUp />
            <div className="my-5">
              Do you already have an account? <Link to="/signin">Sign In</Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SignUp
