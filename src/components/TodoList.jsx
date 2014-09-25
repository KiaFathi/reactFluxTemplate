var React = require('react');
var AppActions = require('../actions/AppActions');

var TodoList = React.createClass({
  handleClick: function(){
    AppActions.deleteEntry(this.props.key);
  },
  render: function(){
    return (
        <p><span>{this.props.text}<button onClick={this.handleClick}>X</button></span></p>
      );
  }
});

module.exports = TodoList;