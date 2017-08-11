import React from 'react';

import './styles/pomo-info.css';

export class PomoInfo extends React.Component {

  render() {
    return (
      <div className="pomo-info">
        <h2> What is the Pomodoro Technique?</h2>
        <p> The Pomodoro Technique is a time management system that can help you more accurately estimate the amount of time required for 
          different types of work, keep focused for short durations, and create trackable progress towards your goals.</p>
        <p>Francesco Cirillo developed the Pomodoro technique to track his work while in university, 
          and its name, Pomodoro, comes from a simple tomato shaped kitchen timer Cirillo used to track his time.</p>
        <p><em>A Pomodoro session consists of:</em></p>
          <ol class="pomo-ol"> 
            <li>Choosing a task to work on</li>
            <li>Set the Pomodoro timer for 25 minutes or a different interval of your choosing</li>
            <li>Focus on your chosen task until the timer goes off - avoiding distractions if possible</li>
            <li>Take your break - during the break do anything but working on the previous task</li>
            <li>Repeat steps 1-4 until you do not want to work anymore</li>
          </ol>
      </div>
    )
  }
}

export default PomoInfo;