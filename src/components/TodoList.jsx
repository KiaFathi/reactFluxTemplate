var React = require('react');

var TodoList = React.createClass({
  handleClick: function(){
    this.props.handleClick(this.props.key);
  },
  render: function(){
    return (
      <button onClick={this.handleClick}>{this.props.text}</button>
      );
  }
});

module.exports = TodoList;