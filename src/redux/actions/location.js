import axios from '../../utils/axios'

export const getLocation = (id, data) => {
  // FIND LOCATION BY ID
  if (id) {
    return {
      type: "GET_LOCATION",
      payload: axios.get(`locations/${id}`)
    }
  }

  // GET ALL LOCATION
  else {
    let query =''

    data.limit
    ? query += `limit=${ data.limit }&&`
    : query += ''

    data.page
    ? query += `page=${ data.page }&&`
    : query += ''

    data.city
    ? query += `city=${ data.city }&&`
    : query += ''

    data.address
    ? query += `address=${ data.address }&&`
    : query += ''

    return {
      type: "GET_LOCATION",
      payload: axios.get(`locations/?${query}`)
    }
  }
}
