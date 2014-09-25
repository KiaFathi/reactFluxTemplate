'use strict';

var React = require('react');

//Flux Architecture Components
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');


//React Components
var TodoList = require('./TodoList.jsx');
var NewTodo = require('./NewTodo.jsx');

function getAppState(){
  return AppStore.getData()
};

var APP = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  _onChange: function(){
    this.setState(getAppState());
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  
  render: function(){
    var _this = this;
    var TodoLists = _this.state.todos.map(function(item, index){
      return <TodoList key={index} text={item.text}/>
    });
    return (
      <div>
        <NewTodo/>
        {TodoLists}
      </div>
      );
  }

})

module.exports = APP;