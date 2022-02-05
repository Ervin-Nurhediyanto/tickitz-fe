import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class CardMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { id, image, name, category, handleClick_01, handleClick_02, handleClick_03, handleClick_04 } = this.props
    return (
      <div className="p-3 border border-1 border-gray border-radius-8">
        <img
          src={ image }
          alt="card_movie"
          className="img border-radius-10"
        />
        <div className="my-2 text-center"><b>{ name }</b></div>
        <div className="font-10 text-gray text-center">{ category }</div>

        {/* BUTTON DETAIL */}
        {
          handleClick_01
          ? <div className="mt-4 d-flex justify-content-center">
              <Button
                variant='primary'
                className={'w-100 '}
                onClick={() => handleClick_01(id)}
              >
                Details
              </Button>
            </div>
          : <></>
        }

        {/* BUTTON BOOK */}
        {
          handleClick_01
          ? <div className="mt-4 d-flex justify-content-center">
              <Button
                variant='primary'
                className={'w-100 '}
                onClick={() => handleClick_02(id)}
              >
                Book Now
              </Button>
            </div>
          : <></>
        }

        {/* BUTTON UPDATE */}
        {
          handleClick_03
          ? <div className="mt-2 d-flex justify-content-center">
              <Button
                variant='primary'
                className={'w-100 bg-transparent text-primary'}
                onClick={() => handleClick_03(id)}
              >
                Update
              </Button>
            </div>
          : <></>
        }

        {/* BUTTON DELETE */}
        {
          handleClick_04
          ? <div className="mt-2 d-flex justify-content-center">
              <Button
                variant='primary'
                className={'w-100 bg-transparent text-danger border-danger'}
                onClick={() => handleClick_04(id)}
              >
                Delete
              </Button>
            </div>
          : <></>
        }
      </div>
    )
  }
}

export default withRouter(CardMovie)
