import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (resource, init) => {
          return fetch(resource, init).then((res) => res.json());
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
