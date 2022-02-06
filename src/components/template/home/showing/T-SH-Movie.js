import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getMovie } from '../../../../redux/actions/movie'
import CardMovie from '../../base/card/T-CardMovie'
import Page from '../../base/page/T-Page'

class SHmovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      totalPages: 0
    }
  }

  componentDidMount() {
    const today = new Date()
    const data = {
      page: 1,
      limit: 6,
      releaseDate: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    }
    this.props.getMovie(null, data)
    .then((res) => {
      this.setState({
        movies: res.value.data.data.rows,
        totalPages: res.value.data.totalPages
      })
    })
  }

  handleDetail = (id) => {
    this.props.history.push(`/detail/${id}`)
  }

  handleOrder = (id) => {
    // this.props.history.push(`/order/${id}`)
    alert('MAINTENANCE SERVER')
  }

  handlePageClick = (page) => {
    const today = new Date()
    const data = {
      page: page + 1,
      limit: 6,
      releaseDate: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    }
    this.props.getMovie(null, data)
    .then((res) => {
      this.setState({
        movies: res.value.data.data.rows,
        totalPages: res.value.data.totalPages
      })
    })
  }

  render() {
    const { movies, totalPages } = this.state
    return (
      <Row>
        <Col>
          {/* MOVIE LIST */}
          <Row className='p-2 m-0'>
            { movies.map((movie, index) => {
              return (
                <Col xs={12} lg={2} key={ index }>
                  <CardMovie
                    id={ movie.id }
                    image={ movie.image }
                    name={ movie.title }
                    category={ movie.category }
                    handleClick_01={ this.handleDetail.bind(this) }
                    handleClick_02={ this.handleOrder.bind(this) }
                  />
                </Col>
              )
            }) }
          </Row>
          {/* PAGINATION */}
          <Row>
            <Col>
              <Page
                totalPages={ totalPages }
                handlePageClick={ this.handlePageClick.bind(this) }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) =>({
  // movie: state.movie.data.rows
})

const mapDispatchToProps = { getMovie }

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(SHmovie))
