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
  }
};

module.exports = AppActions;