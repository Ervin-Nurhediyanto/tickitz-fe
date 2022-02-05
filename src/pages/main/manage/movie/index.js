import React, { Component } from 'react'
import Navbar from '../../../../components/template/base/navbar/T-Navbar'
import Footer from '../../../../components/template/base/footer/T-Footer'
import ManageMovie from './Manage-Movie'

class MMovieIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <>
      <Navbar/>
      <ManageMovie/>
      <Footer/>
    </>
    )
  }
}

export default MMovieIndex
