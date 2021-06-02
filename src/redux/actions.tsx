import { createAction } from '@reduxjs/toolkit';
import { IContact } from '../interface/Interface';

export const fetchContactsRequest = createAction(
  'phonebook/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction<IContact[]>(
  'phonebook/fetchContactsSuccess',
);
export const fetchContactsError = createAction<string>(
  'phonebook/fetchContactsError',
);

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction<IContact>(
  'phonebook/addContactSuccess',
);
export const addContactError = createAction<string>(
  'phonebook/addContactError',
);

export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction<string>(
  'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction<string>(
  'phonebook/deleteContactError',
);

export const changeFilter = createAction<string>('phonebook/changeFilter');
