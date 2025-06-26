import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { Provider } from 'react-redux';
import store from 'shared/redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
    </Provider>
  </React.StrictMode>
);
