import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/pages/Home';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
