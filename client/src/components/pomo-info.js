import React from 'react';
import { connect } from 'react-redux';
import './styles/pomo-info.css';
// import { fetchCheeses } from '../actions/cheese'

export class PomoInfo extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }

  render() {

    return (
      <div className="pomo-info">
        <p>What is the pomodoro method? This will tell you.</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  // cheeses: state.cheeses.cheeses,
  // loading: state.cheeses.loading
})

export default connect(mapStateToProps)(PomoInfo);