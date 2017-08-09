import React from 'react';
import { connect } from 'react-redux';

import './styles/user-data.css';

export class UserData extends React.Component {

  render() {
    return (
      <div className="user-data">
        <p>this will be user data, which will track things like:</p>
        <ul>
          <li>session name</li>
          <li>total work time</li>
          <li>total break time</li>
          <li>total session time</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  // cheeses: state.cheeses.cheeses,
  // loading: state.cheeses.loading
})

export default connect(mapStateToProps)(UserData);
