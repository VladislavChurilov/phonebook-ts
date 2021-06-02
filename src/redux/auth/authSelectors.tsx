import { RootState } from '../store';

const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

const getUsername = (state: RootState) => state.auth.user.name;

const authSelectors = {
  getIsAuthenticated,
  getUsername,
};

export default authSelectors;
