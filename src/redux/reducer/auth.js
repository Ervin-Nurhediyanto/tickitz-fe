const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  message: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        user: action.payload.data.data
      }

    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.error.message
      }

    // SIGNUP
    case 'SIGNUP_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'SIGNUP_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        user: action.payload.data.data
      }

    case 'SIGNUP_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.error.message
      }

    // FORGOT
    case 'FORGOT_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'FORGOT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        user: action.payload.data.data
      }

    case 'FORGOT_REJECTED':
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

export default auth
