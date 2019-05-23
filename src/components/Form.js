import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
      this.state = {
        breed: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ breed: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.getImage(this.state.breed)
  }

  render(){
    return(
      <div className='form'>
        <h1>Dogs!</h1>
        <form onSubmit = {this.handleSubmit}>
          <input type = 'text' onChange = {this.handleChange} placeholder = 'Enter Breed' />
          <input type = 'submit' />
        </form>
      </div>
    )
  }
}

export default Form;
