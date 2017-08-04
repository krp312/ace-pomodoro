import React from 'react';
import { connect } from 'react-redux';
import { postCheese } from '../actions/add-cheese';

export class AddCheeseForm extends React.Component {
  submitCheese(e){
    e.preventDefault();
    const inputBody = this.input;
    this.props.dispatch(postCheese(inputBody));
    this.input.value = '';
  }

  render() {
    return (
      <div className="cheeseForm"> 
        <form onSubmit={e => this.submitCheese(e)}> 
          <fieldset>
            <input type="text" name="userCheese" id="userCheese"
              className="text" placeholder="Add your cheese" required
              ref={input => this.input = input} />
               <button type="submit" id="cheeseButton" className="button" name="submit">Cheese</button>
          </fieldset>
        </form>
      </div>
    )
  }

}

export default connect()(AddCheeseForm)