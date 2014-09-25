'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _data = {
  todos: [
    {text: 'Data from Store'},
    {text: 'Sup Team from Store'},
    {text: 'We having a good time?'}
  ]
};

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

  if(action.actionType === AppConstants.EXAMPLE_CONSTANT){
    var text = action.text + ' to Dispatcher to Store and back';
    _data.message = text;
  }
  else if(action.actionType=== AppConstants.UPDATE_ENTRY){
    var todos = _data.todos;
    todos[action.key].text = 'Updated due to click' 
  }

  AppStore.emitChange();

});



module.exports = AppStore;