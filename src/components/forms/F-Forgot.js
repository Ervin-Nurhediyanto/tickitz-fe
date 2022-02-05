import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { forgot } from '../../redux/actions/auth'
import { withRouter } from 'react-router'

class FForgot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
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

  handleForgot = (event) => {
    const { forgot } = this.props
    const { form } = this.state

    event.preventDefault()

    forgot(form)
    .then((res) => {
      const data = res.value.data.data
      const message = res.value.data.message
      alert(message)
      localStorage.setItem('r_id', data.id)
      localStorage.setItem('r_em', data.email)
      localStorage.setItem('r_us', data.username)
    }).catch((err) => {
      const message = err.response.data.error.message
      alert(message)
    })
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Write your email"
            onChange={(event) => { this.changeText(event) }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          onClick={(event) => {this.handleForgot(event)}}
        >
          Activate now
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) =>({
  user: state.auth.user,
})

const mapDispatchToProps = { forgot }

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(FForgot))
