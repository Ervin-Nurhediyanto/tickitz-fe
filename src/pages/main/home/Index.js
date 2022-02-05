import React, { Component } from 'react'
import Navbar from '../../../components/template/base/navbar/T-Navbar'
import Footer from '../../../components/template/base/footer/T-Footer'
import Home from './Home'

class HomeIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
    )
  }
}

export default HomeIndex
