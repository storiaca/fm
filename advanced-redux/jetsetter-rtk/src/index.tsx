import React from 'react';
import ReactDOM from 'react-dom/client';
import { makeServer } from './api';
import Application from './components/application';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';

const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);
