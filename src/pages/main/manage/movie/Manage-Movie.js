import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getMovie, insertMovie, updateMovie, deleteMovie } from '../../../../redux/actions/movie'
import FManageMovie from '../../../../components/forms/manage/movie/F-Manage-Movie'
import MMovieData from '../../../../components/template/manage/movie/T-MM-Data'

class ManageMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNewMovie: false,
      movies: [],
      totalPages: 0,
      search: '',
      form: {
        id: 0,
        title: '',
        director: '',
        category: '',
        cast: '',
        synopsis: '',
        releaseDate: '',
        duration: 0,
        image: ''
      }
    }
  }

  componentDidMount() {
    const data = {
      page: 1,
      limit: 6
    }
    this.props.getMovie(null, data)
    .then((res) => {
      this.setState({
        movies: res.value.data.data.rows,
        totalPages: res.value.data.totalPages
      })
    })
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  handleNewMovie = () => {
    const { isNewMovie } = this.state
    this.setState({
      isNewMovie: !isNewMovie,
      form: {
        id: 0,
        title: '',
        director: '',
        category: '',
        cast: '',
        synopsis: '',
        releaseDate: '',
        duration: 0,
        image: ''
      }
    })
  }

  handleImage = (event) => {
    event.preventDefault()
    console.log(event.target.files[0])
    this.setState({
      form: {
        ...this.state.form,
        image: event.target.files[0]
      }
    })
  }

  handleSubmit = (event) => {
    const { form, isNewMovie } = this.state
    const formData = new FormData()
    event.preventDefault()

    formData.append('title', form.title)
    formData.append('director', form.director)
    formData.append('category', form.category)
    formData.append('cast', form.cast)
    formData.append('synopsis', form.synopsis)
    formData.append('releaseDate', form.releaseDate)
    formData.append('duration', form.duration)
    formData.append('image', form.image)

    // // CHECK FORM DATA
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1])
    // }

    if (isNewMovie) {
      this.props.insertMovie(formData)
      .then((res) => {
        alert('Success')
        const data = {
          page: 1,
          limit: 6
        }
        this.props.getMovie(null, data)
        .then((res) => {
          this.setState({
            movies: res.value.data.data.rows,
            totalPages: res.value.data.totalPages
          })
        })
      })
    } else {
      this.props.updateMovie(form.id, formData)
      .then((res) => {
        alert('Success')
        const data = {
          page: 1,
          limit: 6
        }
        this.props.getMovie(null, data)
        .then((res) => {
          this.setState({
            movies: res.value.data.data.rows,
            totalPages: res.value.data.totalPages
          })
        })
      })
    }
  }

  handleReset = () => {
    this.setState({
      form: {
        title: '',
        director: '',
        category: '',
        cast: '',
        synopsis: '',
        releaseDate: '',
        duration: 0,
        image: null
      }
    })
  }

  selectDate = (date) => {
    let month = date.getMonth() + 1
    let day = date.getDate() + 1
    let year = date.getFullYear()
    const selectDate = [year, month, day].join('-')
    this.setState({
      form: {
        ...this.state.form,
        releaseDate: selectDate
      }
    })
  }

  handlePageClick = (page) => {
    const { search } = this.state
    const data = {
      page: page + 1,
      limit: 6,
      title: search
    }
    this.props.getMovie(null, data)
    .then((res) => {
      this.setState({
        movies: res.value.data.data.rows,
        totalPages: res.value.data.totalPages
      })
    })
  }

  handleSearch = (event) => {
    const data = {
      page:  1,
      limit: 6,
      title: event.target.value
    }
    this.props.getMovie(null, data)
    .then((res) => {
      this.setState({
        movies: res.value.data.data.rows,
        totalPages: res.value.data.totalPages,
        search: event.target.value
      })
    })
  }

  handleUpdate = (id) => {
    this.props.getMovie(id)
    .then((res) => {
      const data = res.value.data
      this.setState({
        isNewMovie: false,
        form: {
          id: data.id,
          title: data.title,
          director: data.director,
          category: data.category,
          cast: data.cast,
          synopsis: data.synopsis,
          releaseDate: data.releaseDate,
          duration: data.duration,
          image: data.image
        }
      })
    })
  }

  handleDelete = (id) => {
    if (window.confirm("Delete the movie?")) {
      this.props.deleteMovie(id)
      .then((res) => {
        alert('Delete success')
        const data = {
          page: 1,
          limit: 6
        }
        this.props.getMovie(null, data)
        .then((res) => {
          this.setState({
            movies: res.value.data.data.rows,
            totalPages: res.value.data.totalPages
          })
        })
      })
    } else {
      console.log('Cancel')
    }
  }

  render() {
    const { movies, form, totalPages, isNewMovie } = this.state
    return (
    <>
      <FManageMovie
        form={form}
        isNewMovie={ isNewMovie }
        handleImage={ this.handleImage.bind(this)}
        changeText={ this.changeText.bind(this) }
        handleReset={ this.handleReset.bind(this) }
        handleSubmit={ this.handleSubmit.bind(this) }
        selectDate={ this.selectDate.bind(this) }
        handleNewMovie={ this.handleNewMovie.bind(this) }
      />
      <MMovieData
        movies={ movies }
        totalPages= { totalPages }
        handlePageClick={ this.handlePageClick.bind(this) }
        handleSearch={ this.handleSearch.bind(this) }
        handleUpdate={ this.handleUpdate.bind(this) }
        handleDelete={ this.handleDelete.bind(this) }
      />
    </>
    )
  }
}

const mapStateToProps = (state) =>({
  // movie: state.movie.data.rows
})

const mapDispatchToProps = { getMovie, insertMovie, updateMovie, deleteMovie }

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(ManageMovie))
