import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import MMtitle from './T-MM-Title'
import MMsearch from './T-MM-Search'
import CardMovie from '../../base/card/T-CardMovie'
import Page from '../../base/page/T-Page'

class MMdata extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      movies,
      totalPages,
      handlePageClick,
      handleSearch,
      handleUpdate,
      handleDelete
    } = this.props
    return (
      <Row className='d-flex justify-content-center m-0 p-0 bg-gray'>
        <MMtitle/>
        <MMsearch handleSearch={ handleSearch }/>
        <Col xs={11} lg={11} className='my-3 p-4 border-radius-6 box-shadow-card bg-white'>
          {/* MOVIES */}
          <Row>
            {
              movies.map((movie, index) => {
                return (
                  <Col key={index} lg={2} className='p-3'>
                    <CardMovie
                      id={ movie.id }
                      image={ movie.image }
                      name={ movie.title }
                      category={ movie.category }
                      handleClick_03={ handleUpdate }
                      handleClick_04={ handleDelete }
                    />
                  </Col>
                )
              })
            }
          </Row>
          {/* PAGINATION */}
          <Row>
            <Col>
              <Page
                totalPages={ totalPages }
                handlePageClick={ handlePageClick }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default MMdata
