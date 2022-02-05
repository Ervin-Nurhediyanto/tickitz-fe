import axios from '../../utils/axios'

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axios.post('users/login', data)
  }
}

export const signup = (data) => {
  return {
    type: "SIGNUP",
    payload: axios.post('users', data)
  }
}

export const forgot = (data) => {
  return {
    type: "FORGOT",
    payload: axios.post('users/forgot', data)
  }
}
