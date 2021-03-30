import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.scss';


ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>, // Provider from react-redux "connects" store to HomePage and all children
  document.getElementById('root')
);
