import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Row, Col }from 'react-bootstrap'
import Logo from '../T-Logo'
import Logo_ebv from '../../../../assets/image/ebv.id 2.png'
import Logo_cineOne21 from '../../../../assets/image/CineOne21 2.png'
import Logo_hiflix from '../../../../assets/image/hiflix 2.png'
import BtnTime from '../button/T-ButtonTime'
import BtnBook from '../button/T-ButtonBook'

class CardTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleBook = (event) => {
    alert('MAINTENANCE SERVER')
  }

  render() {
    const { ticket } = this.props
    return (
      <div className="p-3 border-radius-8 box-shadow-card bg-white">
        <Row className="">
          <Col className="p-3 d-flex align-items-center">
            <Row>
              {
                ticket.premiere === 'ebv.id'
                ? <Logo image={ Logo_ebv }/>
                : ticket.premiere === 'CineOne21'
                ? <Logo image={ Logo_cineOne21 }/>
                : <Logo image={ Logo_hiflix }/>
              }
            </Row>
          </Col>
          <Col>
            <div className="font-24">{ ticket.premiere }</div>
            <div className="font-12 text-gray-2">{ ticket.address } { ticket.city }</div>
          </Col>
        </Row>
        <hr/>
        <BtnTime ticket={ ticket }/>
        <Row className="mt-2">
          <Col className="font-16 text-gray-3">Price</Col>
          <Col className="font-16 font-bold d-flex justify-content-end">
            Rp.{ ticket.price.toLocaleString() }/seat
          </Col>
        </Row>
        <Row className="mt-3 p-2">
          <BtnBook handleClick={ this.handleBook.bind(this) }/>
        </Row>
      </div>
    )
  }
}

export default withRouter(CardTicket)
