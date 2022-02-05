import React, { Component } from 'react'
import HomeHL from '../../../components/template/home/highlight/T-HomeHL'
import HomeSH from '../../../components/template/home/showing/T-HomeSH'
import HomeUP from '../../../components/template/home/upcoming/T-HomeUP'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <>
      <HomeHL/>
      <HomeSH/>
      <HomeUP/>
    </>
    )
  }
}

export default Home
