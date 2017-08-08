import React from 'react';
import { connect } from 'react-redux';
import './styles/work-timer.css';
// import { fetchCheeses } from '../actions/cheese'

export class WorkTimer extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }

  render() {

    return (
      <div className="work-timer">
        <p>this is the main pomo timer component for work period</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  // cheeses: state.cheeses.cheeses,
  // loading: state.cheeses.loading
})

export default connect(mapStateToProps)(WorkTimer);