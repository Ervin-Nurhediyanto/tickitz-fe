import React, { Component } from 'react'
import PrivateRoute from './helpers/PrivateRoute'
import PublicRoute from './helpers/PublicRoute'
import store from './redux/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// COMPONENT PAGE
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
import Home from './pages/main/home/Index'
import Detail from './pages/main/detail/Index'
import ManageMovie from './pages/main/manage/movie/index'

// import AdminMovie from './pages/admin/Manage-Movie'
// import AdminSchedule from './pages/admin/Manage-Schedule'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* Auth */}
            <PublicRoute restricted={ true } path="/signup" component={ SignUp } />
            <PublicRoute restricted={ true } path="/signin" component={ SignIn } />
            <PublicRoute restricted={ true } path="/forgot" component={ Forgot } />
            <PublicRoute restricted={ true } path="/reset" component={ Reset } />

            {/* Main */}
            <PublicRoute path="/" exact component={ Home } />
            <PrivateRoute path="/detail/:id" component={ Detail } />

            {/* Admin */}
            <Route path="/manage/movie" exact component={ ManageMovie }></Route>
            {/* <Route path="/admin/schedule" exact component={AdminSchedule}></Route> */}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
