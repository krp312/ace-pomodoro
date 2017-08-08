import React from 'react';
import { connect } from 'react-redux';
import './styles/set-pomo.css';
import { submitPomodoro } from '../actions/actions';

export class SetPomo extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }
  formSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitPomodoro());
  }
  render() {

    return (
      <div className="set-pomo">
        <em>set pomo</em>
        <form onSubmit={e => this.formSubmit(e)}>
          <input type="text" placeholder="25"></input>
          <input type="text" placeholder="tag"></input>
          
          <button type="submit">Set Pomodoro</button>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => (
//   {
//   // cheeses: state.cheeses.cheeses,
//   // loading: state.cheeses.loading
// })

export default connect()(SetPomo);
