import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'
import { withRouter } from 'react-router'

class FSignin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: '',
        password: ''
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

  handleLogin = (event) => {
    const { login } = this.props
    const { form } = this.state

    event.preventDefault()

    form.email.length < 1 || form.password.length < 1
    ? alert("invalid email or password")
    : login(form)
    .then((res) => {
      const token = res.value.data.data.token
      localStorage.setItem('token', token)
      this.props.history.push('/')
    }).catch((err) => {
      const message = err.response.data.error.message
      alert("invalid email or password")
      console.log(message)
    })
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type="email"
            placeholder="Write your email"
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

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          onClick={(event) => { this.handleLogin(event) }}
        >
          Sign In
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) =>({
  user: state.auth.user,
})

const mapDispatchToProps = { login }

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(FSignin))
