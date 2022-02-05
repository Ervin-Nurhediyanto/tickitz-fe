import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'
import { getMovie } from '../../../../redux/actions/movie'
import DMimage from './T-DM-Image'
import DMinfo from './T-DM-Info'

class DetailMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getMovie(id)
    .then((res) => {
      this.setState({
        movie: res.value.data
      })
    })
  }

  render() {
    const { movie } = this.state
    return (
      <Col xs={12} lg={12} className=''>
        <Row className='p-0 m-0'>
          <DMimage movie={ movie }/>
          <DMinfo movie={ movie }/>
        </Row>
      </Col>
    )
  }
}

const mapStateToProps = (state) =>({
  // movie: state.movie.data
})

const mapDispatchToProps = { getMovie }

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(DetailMovie))
