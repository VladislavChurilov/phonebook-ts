import { createAction } from '@reduxjs/toolkit';
import { IRegistr, ILogIn } from '../../interface/Interface';

export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction<IRegistr>('auth/registerSuccess');
export const registerError = createAction<string>('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction<ILogIn>('auth/loginSuccess');
export const loginError = createAction<string>('auth/loginError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction<string>('auth/logoutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction<ILogIn>(
  'auth/getCurrentUserSuccess',
);
export const getCurrentUserError = createAction<string>(
  'auth/getCurrentUserError',
);
