import React from 'react';
import ReactDOM from 'react-dom';

import { offers } from './mocks/offers';
import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App placeCards={offers} />
  </React.StrictMode>,
  document.getElementById('root'));
