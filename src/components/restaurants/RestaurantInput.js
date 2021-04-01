import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    
    this.setState({
      text: ""
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Restaurant Name: </label>
          <input value={this.state.text} onChange={this.handleChange}/>
          <input type="submit"/> 

        </form>
        
      </div>
    );
  }
};

export default RestaurantInput;
