import axios from '../../utils/axios'

export const insertMovie = (data) => {
  return {
    type: "INSERT_MOVIE",
    payload: axios.post(`movies`, data)
  }
}

export const updateMovie = (id, data) => {
  return {
    type: "UPDATE_MOVIE",
    payload: axios.patch(`movies/${id}`, data)
  }
}

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: axios.delete(`movies/${id}`)
  }
}

export const getMovie = (id, data) => {
  // FIND MOVIE BY ID
  if (id) {
    return {
      type: "GET_MOVIE",
      payload: axios.get(`movies/${id}`)
    }
  }

  // GET ALL MOVIE
  else {
    let query =''

    data.limit
    ? query += `limit=${ data.limit }&&`
    : query += ''

    data.page
    ? query += `page=${ data.page }&&`
    : query += ''

    data.title
    ? query += `title=${ data.title }&&`
    : query += ''

    data.director
    ? query += `director=${ data.director }&&`
    : query += ''

    data.category
    ? query += `category=${ data.category }&&`
    : query += ''

    data.cast
    ? query += `cast=${ data.cast }&&`
    : query += ''

    data.synopsis
    ? query += `synopsis=${ data.synopsis }&&`
    : query += ''

    data.releaseDate
    ? query += `releaseDate=${ data.releaseDate }&&`
    : query += ''

    return {
      type: "GET_MOVIE",
      payload: axios.get(`movies/?${query}`)
    }
  }
}
