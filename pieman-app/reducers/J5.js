'use strict';
var types = require('../constants/actionTypes');

var initialState = {};

function j5Reducer(state, action) {
  state = state || initialState;
  if (action.type === types.ADD_J5) {
    var newState = Object.assign({}, state);
    newState[action.name] = newState[action.name] || {};
    newState[action.name][action.id] = action.data;
    return newState;
  }

  if (action.type === types.SET_J5) {
    var newState = Object.assign({}, state);
    if (newState[action.name]){
      var oldState = newState[action.name][action.id];
      newState[action.name][action.id] = Object.assign({}, oldState, action.data);
    }
    return newState;
  }

  return state;
}

module.exports = j5Reducer;