const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    // GET
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'GET_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        user: action.payload.data.data
      }

    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.error.message
      }

    // UPDATE
    case 'UPDATE_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'UPDATE_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        user: action.payload.data.data
      }

    case 'UPDATE_USER_REJECTED':
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

export default user
