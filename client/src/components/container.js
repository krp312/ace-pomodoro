import React from 'react';
import { connect } from 'react-redux';
import './styles/container.css';
import LogIn from './login';
import UserData from './user-data';
import SetPomo from './set-pomo';
import WorkTimer from './work-timer';
import BreakTimer from './break-timer';
import PomoInfo from './pomo-info';
// import { fetchCheeses } from '../actions/cheese'

// LogIn, UserData, SetPomo, 



export class Container extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }

  render() {

    return (
      <div className="container">
        <LogIn/>
        <UserData/>
        <SetPomo/>
        <WorkTimer/>
        <BreakTimer/>
        <PomoInfo/>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  // cheeses: state.cheeses.cheeses,
  // loading: state.cheeses.loading
})

export default connect(mapStateToProps)(Container);
