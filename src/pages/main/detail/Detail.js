import React, { Component } from 'react'
import DetailMovie from '../../../components/template/detail/movie/T-Detail-Movie'
import DetailTicket from '../../../components/template/detail/ticket/T-Detail-Ticket'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
    <>
      <DetailMovie/>
      <DetailTicket/>
    </>
    )
  }
}

export default Detail
