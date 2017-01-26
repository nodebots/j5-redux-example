'use strict';
var types = require('../constants/actionTypes');

var initialState = {
  listening: true,
  round: 0,
  pressCount: 0,
  sequence: [],
  gameover: false,
  newGame: false
};

function piemanReducer(state, action) {
  state = state || initialState;

  if (action.type === types.ADVANCE_ROUND) {
    var newState = Object.assign({}, state);
    newState.pressCount = 0;
    newState.round = state.round + 1;
    return newState;
  }

  if (action.type === types.ADD_PRESS) {
    var newState = Object.assign({}, state);
    newState.pressCount = state.pressCount + 1;
    return newState;
  }

  if (action.type === types.NEW_GAME) {
    return Object.assign({}, state, action.data);
  }

  if (action.type === types.RESET_PRESS) {
    var newState = Object.assign({}, state);
    newState.pressCount = 0;
    return newState;
  }

  if (action.type === types.RESET_GAME) {
    return Object.assign({}, state, action.data);
  }

  if (action.type === types.LISTENING_ON) {
    var newState = Object.assign({}, state);
    newState.listening = action.on;
    return newState;
  }

  if (action.type === types.SET_SEQUENCE) {
    var newState = Object.assign({}, state);
    newState.sequence = action.sequence;
    return newState;
  }

  if (action.type === types.SET_GAMEOVER) {
    return Object.assign({}, state, action.data);
  }

  return state;
}

module.exports = piemanReducer;