'use strict';
/**
 * J5 Actions for generically adding a j5 component to the "J5" redux store
 * Things like buttons and sensors will be maps under the 'J5s' object, and added dynamically
 *
 * Q: Should a user have more control over what their redux store is shaped like?
 */

function listening(on) {
  return {
    type: 'LISTENING_ON',
    on: on
  };
}

function resetGame() {
  return {
    type: 'RESET_GAME',
    data: {
      pressCount: 0,
      round: 0,
      listening: false
    }
  };
}

function advanceRound() {
  console.log('advanced round');
  return {
    type: 'ADVANCE_ROUND'
  };
}

function addPress() {
  return {
    type: 'ADD_PRESS'
  };
}

function resetPress() {
  return {
    type: 'RESET_PRESS'
  };
}

function setSequence(colors) {
  return {
    type: 'SET_SEQUENCE',
    sequence: colors
  };
}

function gameover(state) {
  return {
    type: 'SET_GAMEOVER',
    data: {
      listening: true,
      round: 0,
      pressCount: 0,
      sequence: [],
      gameover: false,
      newGame: false
    }
  };
}

function newGame() {
  return {
    type: 'NEW_GAME',
    data: {
      gameover: false,
      newGame: true
    }
  };
}


module.exports = {
  addPress: addPress,
  advance: advanceRound,
  gameover: gameover,
  listening: listening,
  newGame: newGame,
  reset: resetGame,
  resetPress: resetPress,
  setSequence: setSequence
};