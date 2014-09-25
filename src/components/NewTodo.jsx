'use strict';
var React = require('react');
var AppActions = require('../actions/AppActions');

var NewTodo = React.createClass({
  getInitialState: function(){
    return {
      value: ''
    }
  },
  _onChange: function(e){
    this.setState({
      value: event.target.value
    });
  },
  handleClick: function(){
    AppActions.addEntry(this.state.value);
    this.setState({value : ''});
  },
  render: function(){
    return (
      <div>
        <input type='text' onChange={this._onChange} value={this.state.value}/><button onClick={this.handleClick}>+</button>
      </div>
      );
  }
});

module.exports = NewTodo;