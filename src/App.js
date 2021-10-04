import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './components/Routes'
import Layout from './components/Layout';

const App = () => {
  const mappedRoutes = Routes.map((route, index) => {
    return route.component && (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            component={route.component}
        />
    );
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Suspense fallback="Loading">
        <BrowserRouter>
          <Layout>
            { mappedRoutes }
            <Redirect from="/" to="/demo" />
          </Layout>
        </BrowserRouter>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
