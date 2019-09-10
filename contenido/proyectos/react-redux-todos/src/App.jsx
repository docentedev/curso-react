import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import store from './store';
import Home from './views/home/Home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
