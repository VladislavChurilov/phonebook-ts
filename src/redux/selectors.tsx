import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IContact } from '../interface/Interface';

type TSelector<R> = (state: RootState) => R;

// const getLoading: TSelector<boolean> = state => state.contacts.loading;
// const getFilter: TSelector<string> = state => state.contacts.filter;
const getAllContacts: TSelector<IContact[] | []> = state =>
  state.contacts.contacts;
const getLoading = (state: RootState) => state.contacts.loading;
const getFilter = (state: RootState) => state.contacts.filter;
// const getAllContacts = (state: RootState) => state.contacts.contacts;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);
const selectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
};
export default selectors;
// export default {
//   getLoading,
//   getFilter,
//   getVisibleContacts,
// };
