import React from 'react';
import { connect } from 'react-redux';
import { postCheese } from '../actions/add-cheese';

export class AddCheeseForm extends React.Component {

  render() {
    <div className="cheeseForm"> 
      <form> 
        <fieldset>
        </fieldset>
      </form>
    </div>
  }

}

export default connect()(AddCheeseForm)