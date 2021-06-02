import axios from 'axios';
import { AppDispatch } from './store';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async (dispatch: AppDispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.massage));
  }
};
type TContact = {
  name: string;
  number: string;
};
const addContact =
  ({ name, number }: TContact) =>
  async (dispatch: AppDispatch) => {
    const contacts = { name, number };
    dispatch(addContactRequest());
    try {
      const { data } = await axios.post('/contacts', contacts);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.massage));
    }
  };

const deleteContacts = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.massage));
  }
};

const operations = {
  fetchContacts,
  addContact,
  deleteContacts,
};
export default operations;
