// cheeselist
// cheeselist will take a single prop called cheeses
// cheeses is an array of strings
// render a ul with an li for each string in the cheeses prop

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