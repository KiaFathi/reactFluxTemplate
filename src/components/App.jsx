'use strict';

var React = require('react');

//Flux Architecture Components
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');


//React Components
var TodoList = require('./TodoList.jsx');

function getAppState(){
  return AppStore.getData()
};

var APP = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  handleClick: function(key){
    AppActions.updateEntry(key);
  },
  render: function(){
    var _this = this;
    var TodoLists = _this.state.todos.map(function(item, index){
      return <TodoList key={index} handleClick={_this.handleClick} text={item.text}/>
    });
    return (
      <div>
        {TodoLists}
      </div>
      );
  },

  _onChange: function(){
    this.setState(getAppState());
  }
})

module.exports = APP;