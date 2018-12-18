import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/login/login';
import Chatroom from '../pages/chatroom/chatroom';


export interface RouteProps {
    path: string;
    component: React.ComponentClass;
    routes?: RouteProps[];
  }
  
  export const RouteWrapper = (routeProps: RouteProps) => {
    return (
      <Route
        path={routeProps.path}
        render={() => {
          const props = { routes: routeProps.routes };
          return <routeProps.component {...props} />;
        }}
      />
    );
  };

  const routes: RouteProps[] = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/chatroom',
        component: Chatroom,
    }
  ];

export default () => {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(route => <RouteWrapper {...route} />)}
        </Switch>
      </BrowserRouter>
    );
  };