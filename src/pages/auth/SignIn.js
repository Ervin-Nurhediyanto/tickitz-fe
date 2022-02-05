import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import FSignin from '../../components/forms/F-SignIn'

class SignIn extends Component {
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

  handleSignUp = (event) => {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div>
        <Row className="h-100vh w-100p bg-avengers">
          <Col xs={12} lg={4} className="py-5 px-5 bg-white">
            <h2 className="my-3">Sign In</h2>
            <h6 className="my-3 font-10">
              Sign in with your data that you entered during your registration
            </h6>
            <FSignin />
            <div className='mt-5 py-1 text-center'>
              <Link
                to="/forgot" className='text-decoration-none'
              >
                Forgotten account?
              </Link>
            </div>
            <div className="my-2 font-w-100 text-secondary d-flex justify-content-center">or</div>
            <div className='d-flex justify-content-center'>
              <Button
                variant="success"
                type="submit"
                className="w-30"
                onClick={(event) => { this.handleSignUp(event) }}
              >
                Create New Account
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SignIn
