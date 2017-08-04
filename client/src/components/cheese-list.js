// get store/state to update server variable
// setup post request to send persisted list


import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese'
import AddCheeseForm from './cheese-form';

export class CheeseList extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchCheeses())
  }

  render() {

    return (
      <div className="cheeseList">
        <p> Hello!! </p>
        <AddCheeseForm />
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
