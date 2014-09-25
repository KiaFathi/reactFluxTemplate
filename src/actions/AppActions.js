'use strict';
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  exampleAction: function(text){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.EXAMPLE_CONSTANT,
      text: text + ' to Actions'
    });
  },
  updateEntry: function(key){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_ENTRY,
      key: key
    });
  },
  deleteEntry: function(key){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_ENTRY,
      key: key
    });
  },
  addEntry: function(text){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ENTRY,
      text: text
    });
  }
};

module.exports = AppActions;