var React = require('react');

var TodoList = React.createClass({
  handleClick: function(){
    this.props.handleClick(this.props.key);
  },
  render: function(){
    return (
        <p><span>{this.props.text}<button onClick={this.handleClick}>X</button></span></p>
      );
  }
});

module.exports = TodoList;