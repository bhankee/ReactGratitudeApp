import React, { Component } from 'react';
import List from './List';

class Grateful extends Component {
  state = {
    list: [],
    text: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    let updatedList = this.state.list;
    updatedList.push(this.state.text);
    this.setState({
      item: updatedList,
      text: ''
    });
    console.log(this.state.list);
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add</button>
        </form>
        <List listItems={this.state.list} />
      </div>
    );
  }
}

export default Grateful;
