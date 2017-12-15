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
  handleReset = e => {
    this.setState({ list: [] });
  };
  render() {
    return (
      <div className="formStyle">
        <button onClick={this.handleReset} className="reset">
          Reset
        </button>
        <form onSubmit={this.handleSubmit} className="formSet">
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add</button>
        </form>

        <List listItems={this.state.list} />
      </div>
    );
  }
}

export default Grateful;
