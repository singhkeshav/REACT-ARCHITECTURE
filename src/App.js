import React, { lazy } from 'react';
import MainRouting from './routing/mainRouting';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loader from './shared/components/loader';
function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Loader />
      <MainRouting />
    </div>
  );
}

export default App;
