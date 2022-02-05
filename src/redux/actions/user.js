import axios from '../../utils/axios'

export const updateUser = (id, data) => {
  return {
    type: "UPDATE_USER",
    payload: axios.patch(`users/${id}`, data)
  }
}

export const getUser = (id, data) => {
  // FIND USER BY ID
  if (id) {
    return {
      type: "GET_USER",
      payload: axios.get(`users/${id}`)
    }
  }

  // GEL ALL USER
  else {
    let query = ''

    return {
      type: "GET_USER",
      payload: axios.get(`users/?${query}`)
    }
  }
}
