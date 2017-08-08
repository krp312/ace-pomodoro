import React from 'react';
import { connect } from 'react-redux';
import './styles/user-data.css';

export class UserData extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }

  render() {
    return (
      <div className="user-data">
        <p>this will be user data</p>
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
