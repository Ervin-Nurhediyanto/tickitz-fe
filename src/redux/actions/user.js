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

// export const updateUser = (id, filter) => {
//   if (id) {
//     return {
//       type: "GET_MOVIE",
//       payload: axios.get(`movies/${id}`)
//     }
//   } else {
//     let query ='/?'

//     filter.page
//     ? query += `page=${filter.page}&&`
//     : query += ''

//     filter.limit
//     ? query += `limit=${filter.limit}&&`
//     : query += ''

//     filter.sort
//     ? query += `sort=${filter.sort}&&`
//     : query += ''

//     filter.name
//     ? query += `name=${filter.name}&&`
//     : query += ''

//     filter.director
//     ? query += `director=${filter.director}&&`
//     : query += ''

//     filter.category
//     ? query += `category=${filter.category}&&`
//     : query += ''

//     filter.cast
//     ? query += `cast=${filter.cast}&&`
//     : query += ''

//     filter.synopsis
//     ? query += `synopsis=${filter.synopsis}&&`
//     : query += ''

//     filter.status
//     ? query += `status=${filter.status}&&`
//     : query += ''

//     filter.upperDate
//     ? query += `upperDate=${filter.upperDate}&&`
//     : query += ''

//     filter.lowerDate
//     ? query += `lowerDate=${filter.lowerDate}&&`
//     : query += ''

//     return {
//       type: "GET_MOVIE",
//       payload: axios.get('movies' + query)
//     }
//   }
// }
