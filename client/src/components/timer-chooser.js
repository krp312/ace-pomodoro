import React from "react";
import { connect } from "react-redux";
import Timer from './timer';
import "./styles/timer.css";

export class TimerChooser extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.timerType !== prevProps.timerType) {
      this.render()
    }
  }

  render() {
    return <div><Timer /></div>
  }
}

const mapStateToProps = state => ({
  timerType: state.timerType
});

export default connect(mapStateToProps)(TimerChooser);