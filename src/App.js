import React from 'react';
import MainRouting from './routing/mainRouting';
// import SharedService from './shared/services/shared.service';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  // useEffect(() => {
  //   SharedService.login({ username: 'keshav', password: 'keshav' }).then((result) => {

  //   }).catch(ex => {
  //     console.error(ex.message)
  //   })
  // }, [])
  return (
    <div className="App">
      <CssBaseline/>
      <MainRouting />
    </div>
  );
}

export default App;
