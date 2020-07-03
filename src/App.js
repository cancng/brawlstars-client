import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Homepage from './pages/Homepage';
import Club from './pages/Club';
import Bestplayers from './pages/Bestplayers';
import Bestclubs from './pages/Bestclubs';
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <AppNavbar />
        <Route path='/' exact component={Homepage} />
        <Route path='/clubs' exact component={Club} />
        <Route path='/bestplayers' exact component={Bestplayers} />
        <Route path='/bestclubs' exact component={Bestclubs} />
        {/*<AppFooter/>*/}
      </Router>
    </StoreProvider>
  );
}

export default App;
