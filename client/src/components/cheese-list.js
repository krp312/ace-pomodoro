// make form for user input + onSubmit to dispatch postCheeses
// make postCheeses async action plus related sync actions
// make new reducer for post stuff
  // add new to rootReducer
// get store/state to update server variable
// setup post request to send persisted list


import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese'

export class CheeseList extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchCheeses())
  }

  render() {
    console.log('hello' + JSON.stringify(this.props))

    return (
      <div className="cheeseList">
        <p> Hello!! </p>
        {this.props.loading ?
        <p> Loading... </p>
        :
        <ul>
          {this.props.cheeses.map((cheese, index) =>
          <li key={index}>{cheese}</li>
            )}
        </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  cheeses: state.cheeses.cheeses,
  loading: state.cheeses.loading
})

export default connect(mapStateToProps)(CheeseList);
