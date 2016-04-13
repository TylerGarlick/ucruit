'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer.jsx';
import AdminContainer from './containers/AdminContainer.jsx';

import ListOrganizations from './components/organizations/ListOrganizations.jsx';
import NewOrganization from './components/organizations/NewOrganization.jsx';
import EditOrganization from './components/organizations/EditOrganization.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="admin" component={AdminContainer}>
        <Route path="organizations" component={ListOrganizations}/>
        <Route path="organization">
          <Route path="new" component={NewOrganization}/>
          <Route path="edit/:id" component={EditOrganization}/>
        </Route>
      </Route>
    </Route>

  </Router>
);


