import React from 'react';
import { connect } from 'react-redux';
import './styles/break-timer.css';
// import { fetchCheeses } from '../actions/cheese'

export class BreakTimer extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }

  render() {

    return (
      <div className="break-timer">
        <p>this is the main pomo timer component for the break period</p>
      </div>
    )
  }
}

// const mapStateToProps = (state) => (
//   {
//     minutesRemaining: state.minutesRemaining,
//     secondsRemaining: state.secondsRemaining
// })

export default connect()(BreakTimer);