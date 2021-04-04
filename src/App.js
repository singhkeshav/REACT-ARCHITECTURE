import React, { lazy, Suspense } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Loader from './shared/components/loader';
import AuthRoute from './shared/auth/auth';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
const CoreModules = lazy(() => import('./modules/core'));
const DashboardModules = lazy(() => import('./modules/dashboard'));
function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Loader />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <AuthRoute isPrivate={false} path="/" component={CoreModules} />
            <AuthRoute isPrivate={false} path="/dashboard" component={DashboardModules} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
