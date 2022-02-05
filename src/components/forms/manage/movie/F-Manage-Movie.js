import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import FInput from './F-Input'
import FUpload from './F-Upload.js'
import ButtonReset from '../../../template/base/button/T-ButtonReset'
import ButtonSubmit from '../../../template/base/button/T-ButtonSubmit'
import Datepicker from '../../../template/base/datepicker/T-Datepicker'

class FManageMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      form,
      handleImage,
      changeText,
      handleReset,
      handleSubmit,
      selectDate,
      isNewMovie,
      handleNewMovie
    } = this.props
    return (
    <Row className='d-flex justify-content-center p-0 m-0 bg-gray'>
      <Col xs={5} lg={9} className='mt-3 font-24'>
        <b>Form Movie</b>
      </Col>

      <Col xs={6} lg={2} className='mt-3 border border-1 border-gray border-radius-10 bg-white'>
        {
          isNewMovie
          ? <div
              className='w-100 p-1 px-2 font-16 text-success border-0 pointer'
              onClick={handleNewMovie}
            >
              Click to update movie
            </div>
          : <div
              className='w-100 p-1 px-2 font-16 text-primary border-0 pointer'
              onClick={handleNewMovie}
            >
              Click to add new movie
            </div>
        }
      </Col>

      <Col xs={11} lg={11} className='my-3 p-4 border-radius-6 box-shadow-card bg-white'>
        <Row className='p-3'>
          <Col xs={12} lg={12} className='d-flex justify-content-center py-3 my-2 border border-1 border-gray border-radius-4'>
            { isNewMovie ? <b>Add new movie</b> : <b>Update movie</b>}
          </Col>
          <Col xs={12} lg={2} className='d-flex justify-content-center py-3 border border-1 border-gray border-radius-4'>
            <FUpload
              data={form}
              handleClick={ handleImage }
            />
          </Col>
          <Col xs={12} lg={5} className='p-3'>
            <FInput
              name={'title'}
              title={'Movie Name'}
              data={form.title}
              changeText={ changeText }
            />
            <FInput
              name={'director'}
              title={'Director'}
              data={form.director}
              changeText={ changeText }
            />
            <Row className='p-2 font-16'>
              Release date
            </Row>
            <Row className='p-2 font-16'>
              <Datepicker
                class={'w-100 text-center border-radius-10 pointer'}
                selectDate={ selectDate }
              />
            </Row>
          </Col>
          <Col xs={12} lg={5} className='p-3'>
            <FInput
              name={'category'}
              title={'Category'}
              data={form.category}
              changeText={ changeText }
            />
            <FInput
              name={'cast'}
              title={'Casts'}
              data={form.cast}
              changeText={ changeText }
            />
            <FInput
              name={'duration'}
              title={'Duration Minute'}
              data={form.duration}
              changeText={ changeText }
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12} className='p-3'>
            <FInput
              name={'synopsis'}
              title={'Synopsis'}
              data={form.synopsis}
              changeText={ changeText }
            />
          </Col>
        </Row>
        <Row className='d-flex justify-content-end'>
          <Col lg={1} className='my-1'>
            <ButtonReset handleClick={ handleReset }/>
          </Col>
          <Col lg={1} className='my-1'>
            {
              isNewMovie
              ? <ButtonSubmit handleClick={ handleSubmit } text={'Add'}/>
              : <ButtonSubmit handleClick={ handleSubmit } text={'Update'}/>
            }
          </Col>
        </Row>
      </Col>
    </Row>
    )
  }
}

export default FManageMovie
