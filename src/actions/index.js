import { ADD_MESSAGE, SET_CURRENT_USERID, USER_LOGIN } from '../constants';

export function setCurrentUserID(userID) {
  return {
    type: SET_CURRENT_USERID,
    payload: userID,
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}

export function userLogin(userData) {
  return {
    type: USER_LOGIN,
    payload: userData,
  };
}