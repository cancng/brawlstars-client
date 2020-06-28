import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import './App.css';

import AppNavbar from './components/AppNavbar';
import Homepage from './pages/Homepage';
import Club from './pages/Club';

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <AppNavbar />
        <Route path='/' exact component={Homepage} />
        <Route path='/clubs' exact component={Club} />
      </Router>
    </StoreProvider>
  );
}

export default App;
