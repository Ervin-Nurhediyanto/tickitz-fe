import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { totalPages, handlePageClick } = this.props
    return (
      <div className='d-flex justify-content-center'>
        <ReactPaginate
          previousLabel="&#10094;  PREV"
          nextLabel="NEXT  &#10095;"
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={(e) => handlePageClick(e.selected)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          previousLinkClassName={"mx-2 shadow-card text-decoration-none"}
          nextLinkClassName={"mx-2 shadow-card text-decoration-none"}
          breakLinkClassName={"mx-1 border-radius-8 shadow-card text-decoration-none"}
          pageLinkClassName={"mx-1 border-radius-8 shadow-card text-decoration-none"}
          activeLinkClassName={"border-radius-8 bg-primary text-white p-1"}
        />
      </div>
    )
  }
}

export default Page
