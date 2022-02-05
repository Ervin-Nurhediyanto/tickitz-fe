import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import movie from './movie'
import ticket from './ticket'
import location from './location'

export default combineReducers({
  auth,
  user,
  movie,
  ticket,
  location
})
