import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/actions/user'
import { withRouter } from 'react-router'

class FReset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        email: localStorage.getItem('r_em'),
        username: localStorage.getItem('r_us'),
        password: '',
        confirmPassword: ''
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

  handleReset = (event) => {
    const { updateUser } = this.props
    const { form } = this.state
    const id = localStorage.getItem('r_id')

    event.preventDefault()

    if (form.password === form.confirmPassword) {
      updateUser(id, form)
      .then((res) => {
        alert('Reset password success')
        localStorage.removeItem('r_id')
        localStorage.removeItem('r_em')
        localStorage.removeItem('r_us')
        this.props.history.push('/signin')
      }).catch((err) => {
        const message = err.response.data.error.message
        alert(message)
      })
    } else {
      alert('password does not match')
    }
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type="password"
            placeholder="Write your new password"
            onChange={(event) => { this.changeText(event) }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name='confirmPassword'
            type="password"
            placeholder="Write your confirm password"
            onChange={(event) => { this.changeText(event) }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          onClick={(event) => { this.handleReset(event) }}
        >
          Join for free now
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) =>({
  user: state.user.data,
})

const mapDispatchToProps = { updateUser }

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(FReset))
