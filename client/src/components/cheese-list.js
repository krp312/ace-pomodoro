// cheeselist
// cheeselist will take a single prop called cheeses
// cheeses is an array of strings
// render a ul with an li for each string in the cheeses prop

import React from 'react';
// import { connect } from 'react-redux';

export default function CheeseList(props) {
  // componentDidMount(){
  //   this.props.dispatch(CHEESEACTIONFUNCTION())
  // }
    return (
      <div className="cheeseList"> 
          <ul>
            {props.cheeses.map((cheese, index) => 
            <li key={index}>{cheese}</li>
              )}
          </ul>
      </div>
    )
  }
