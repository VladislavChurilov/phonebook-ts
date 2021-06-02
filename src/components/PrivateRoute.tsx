import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
export type TRoute = {
  isAuthenticated?: boolean;
  redirectTo: string;
  children: JSX.Element;
  exact?: boolean;
  path?: string;
  restricted?: boolean;
  isLoggedIn?: boolean;
};

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}: TRoute) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
