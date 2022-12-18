import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import './style/style.scss';
// import 'antd/dist/'
import App from './app/App';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <Router>
        <App/>
      </Router>
  </Provider>
);

