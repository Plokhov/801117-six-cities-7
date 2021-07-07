import React from 'react';
import ReactDOM from 'react-dom';

import { offers } from './mooks/offers';
import App from './components/app/app';


ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>,
  document.getElementById('root'));
