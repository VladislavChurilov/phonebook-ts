import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';

const contacts = createReducer([], {
  [fetchContactsSuccess.type]: (_, { payload }) => payload,
  [addContactSuccess.type]: (state, { payload }) => [...state, payload],
  // {
  //   const duplication = state.find(
  //     ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
  //   );
  //   if (duplication) {
  //     alert(`${payload.name} is alredy in contacts`);
  //   }
  //   return duplication ? state : [...state, payload];
  // },
  [deleteContactSuccess.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest.type]: () => true,
  [fetchContactsSuccess.type]: () => false,
  [fetchContactsError.type]: () => false,
  [addContactRequest.type]: () => true,
  [addContactSuccess.type]: () => false,
  [addContactError.type]: () => false,
  [deleteContactRequest.type]: () => true,
  [deleteContactSuccess.type]: () => false,
  [deleteContactError.type]: () => false,
});
const error = createReducer(null, {});

const filter = createReducer('', {
  [changeFilter.type]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
