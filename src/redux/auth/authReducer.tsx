import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
  loginSuccess,
  loginError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authActions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess.type]: (_, { payload }) => payload.user,
  [loginSuccess.type]: (_, { payload }) => payload.user,
  [logoutSuccess.type]: () => initialUserState,
  [getCurrentUserSuccess.type]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess.type]: (_, { payload }) => payload.token,
  [loginSuccess.type]: (_, { payload }) => payload.token,
  [logoutSuccess.type]: () => null,
});

// type TSetError = (_: any, action: { payload: string; type: string }) => string;
const setError = (_: any, { payload }: any) => payload;
// const cleanError = () => null;

const error = createReducer(null, {
  [registerError.type]: setError,
  [loginError.type]: setError,
  [logoutError.type]: setError,
  [getCurrentUserError.type]: setError,
});
const isAuthenticated = createReducer(false, {
  [registerSuccess.type]: () => true,
  [loginSuccess.type]: () => true,
  [getCurrentUserSuccess.type]: () => true,
  [registerError.type]: () => false,
  [loginError.type]: () => false,
  [getCurrentUserError.type]: () => false,
  [logoutSuccess.type]: () => false,
});
export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
