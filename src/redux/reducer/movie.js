const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: ''
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    // GET
    case 'GET_MOVIE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'GET_MOVIE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        data: action.payload.data.data
      }

    case 'GET_MOVIE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.error.message
      }

    // INSERT
    case 'INSERT_MOVIE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'INSERT_MOVIE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        data: action.payload.data.data
      }

    case 'INSERT_MOVIE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.error.message
      }

    // UPDATE
    case 'UPDATE_MOVIE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'UPDATE_MOVIE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        data: action.payload.data.data
      }

    case 'UPDATE_MOVIE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.error.message
      }

    // DELETE
    case 'DELETE_MOVIE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'DELETE_MOVIE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        data: action.payload.data.data
      }

    case 'DELETE_MOVIE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.error.message
      }

    default:
      return state
  }
}

export default movie
