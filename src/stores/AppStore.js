'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _data = {
  todos: [
    {text: 'Write a lightning talk'},
    {text: 'Give a lightning talk'},
    {text: 'Learn all the things'},
    {text: 'Get a pet bulldog and name it meatball'}
  ]
};

console.log(_data);

var AppStore = merge(EventEmitter.prototype, {
  
  getData: function(){
    return _data;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }


});

AppDispatcher.register(function(payload){
  var action = payload.action;
  var todos = _data.todos;

  if(action.actionType === AppConstants.EXAMPLE_CONSTANT){
    var text = action.text + ' to Dispatcher to Store and back';
    _data.message = text;
  }
  else if(action.actionType === AppConstants.UPDATE_ENTRY){
    todos[action.key].text = 'Updated due to click' 
  }
  else if(action.actionType === AppConstants.DELETE_ENTRY){
    todos.splice(action.key, 1);
  }
  else if(action.actionType === AppConstants.ADD_ENTRY){
    todos.unshift({text: action.text});
  }

  AppStore.emitChange();

});



module.exports = AppStore;