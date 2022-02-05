import axios from '../../utils/axios'

export const getTicket = (id, data) => {
  // FIND TICKET BY ID
  if (id) {
    return {
      type: "GET_TICKET",
      payload: axios.get(`tickets/${id}`)
    }
  }

  // GET ALL TICKET
  else {
    let query =''

    data.limit
    ? query += `limit=${ data.limit }&&`
    : query += ''

    data.page
    ? query += `page=${ data.page }&&`
    : query += ''

    data.movieId
    ? query += `movieId=${ data.movieId }&&`
    : query += ''

    data.locationId
    ? query += `locationId=${ data.locationId }&&`
    : query += ''

    data.times
    ? query += `times=${ data.times }&&`
    : query += ''

    data.ticketDate
    ? query += `ticketDate=${ data.ticketDate }&&`
    : query += ''

    data.premiere
    ? query += `premiere=${ data.premiere }&&`
    : query += ''

    return {
      type: "GET_TICKET",
      payload: axios.get(`tickets/?${query}`)
    }
  }
}
