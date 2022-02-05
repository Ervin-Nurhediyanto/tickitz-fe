const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  message: ''
}

const ticket = (state = initialState, action) => {
  switch (action.type) {
    // GET
    case 'GET_TICKET_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: ''
      }

    case 'GET_TICKET_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: '',
        data: action.payload.data.data
      }

    case 'GET_TICKET_REJECTED':
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

export default ticket
