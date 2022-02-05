import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signup } from '../../redux/actions/auth'
import { withRouter } from 'react-router'

class FSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSignUp = (event) => {
    const { signup } = this.props
    const { form } = this.state

    event.preventDefault()

    signup(form)
    .then((res) => {
      const message = res.value.data.message
      alert(message)
      this.props.history.push('/signin')
    }).catch((err) => {
      const message = err.response.data.error.message
      alert(message)
    })
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name='username'
            type="text"
            placeholder="Write your username"
            onChange={(event) => { this.changeText(event) }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type="password"
            placeholder="Write your password"
            onChange={(event) => { this.changeText(event) }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type="email"
            placeholder="Write your email"
            onChange={(event) => { this.changeText(event) }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          onClick={(event) => { this.handleSignUp(event) }}
        >
          Join for free now
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) =>({
  user: state.auth.user,
})

const mapDispatchToProps = { signup }

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(FSignUp))
