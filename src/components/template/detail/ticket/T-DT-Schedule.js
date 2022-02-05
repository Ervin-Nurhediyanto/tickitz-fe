import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter  } from 'react-router'
import { connect } from 'react-redux'
import { getTicket } from '../../../../redux/actions/ticket'
import { getLocation } from '../../../../redux/actions/location'
import Date from './T-DT-Datepicker'
import Location from './T-DT-Location'
import CardTicket from '../../base/card/T-CardTicket'

class DTschedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [],
      locations: [],
      ticketDate: '',
      selectLoc: ''
    }
  }

  async componentDidMount() {
    // GET TICKET
    const data = {
      page: 1,
      limit: 6,
      movieId: this.props.match.params.id,
      locationId: '',
      ticketDate: ''
    }
    await this.props.getTicket(null, data)
    .then((res) => {
      this.setState({
        tickets: res.value.data.data.rows
      })
    })

    // GET LOCATION
    await this.props.getLocation(null, {page: 1, limit: 1000})
    .then((res) => {
      this.setState({
        locations: res.value.data.data.rows
      })
    })
  }

  // GET TICKET BY DATE
  selectDate = (date) => {
    const { selectLoc } = this.state
    let month = date.getMonth() + 1
    let day = date.getDate()
    let year = date.getFullYear()
    const selectDate = [year, month, day].join('-')
    this.setState({ ticketDate: selectDate})

    const data = {
      page: 1,
      limit: 6,
      movieId: this.props.match.params.id,
      locationId: selectLoc,
      ticketDate: selectDate
    }
    this.props.getTicket(null, data)
    .then((res) => {
      this.setState({
        tickets: res.value.data.data.rows
      })
    })
  }

  // GET TICKET BY LOCATION ID
  selectLocation = (select) => {
    const { ticketDate } = this.state

    this.setState({ selectLoc: select})

    const data = {
      page: 1,
      limit: 6,
      movieId: this.props.match.params.id,
      locationId: select,
      ticketDate
    }
    this.props.getTicket(null, data)
    .then((res) => {
      this.setState({
        tickets: res.value.data.data.rows
      })
    })
  }

  render() {
    const { tickets, locations } = this.state
    return (
      <Col>
        {/* FILTER */}
        <Row className="">
          <Col xs={3} sm={2} lg={4} className=''/>
          <Date selectDate={ this.selectDate.bind(this) }/>
          <Col xs={3} className='d-lg-none d-sm-none d-flex'/>
          <Location data={ locations } handleClick={ this.selectLocation.bind(this) }/>
          <Col sm={2} lg={4} className='d-lg-flex d-sm-flex d-none'/>
        </Row>

        {/* TICKETS */}
        <Row className="p-5">
          {
            tickets.map((item, index) => {
              return (
                <Col lg={4} className='p-3'>
                  <CardTicket
                    key={index}
                    ticket={item}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Col>
    )
  }
}

const mapStateToProps = (state) =>({
  ticket: state.ticket.data.rows,
  location: state.location.data.rows
})

const mapDispatchToProps = {
  getTicket,
  getLocation
}

export default withRouter
(connect(mapStateToProps, mapDispatchToProps)
(DTschedule))

