import React, { Component } from 'react'
import Navbar from '../../../components/template/base/navbar/T-Navbar'
import Footer from '../../../components/template/base/footer/T-Footer'
import Detail from './Detail'

class DetailIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <>
      <Navbar/>
      <Detail/>
      <Footer/>
    </>
    )
  }
}

export default DetailIndex
