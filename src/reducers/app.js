import { ADD_MESSAGE, SET_CURRENT_USERID, USER_LOGIN, SET_BOT_ID } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  userID: 0,
  messages: [],
});

function appReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USERID:
      return state.update('userID', () => action.payload);
    case ADD_MESSAGE:
      return state.update('messages', (messages) => messages.concat(action.payload));
    case USER_LOGIN:
      return state.update('userData', () => action.payload);
    case SET_BOT_ID:
      return state.update('botID', () => action.payload);
    default:
      return state;
  }
}

export default appReducer;

