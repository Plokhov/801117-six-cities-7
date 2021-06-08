import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const placeCards = [
  {
    id: 1,
    type: 'Apartment',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    isPremium: true,
    photo: 'img/apartment-01.jpg',
  },
  {
    id: 2,
    type: 'Apartment',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    isPremium: true,
    photo: 'img/apartment-01.jpg',
  },
  {
    id: 3,
    type: 'Apartment',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    isPremium: true,
    photo: 'img/apartment-01.jpg',
  },
  {
    id: 4,
    type: 'Apartment',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    isPremium: true,
    photo: 'img/apartment-01.jpg',
  },
  {
    id: 5,
    type: 'Apartment',
    name: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    isPremium: true,
    photo: 'img/apartment-01.jpg',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App placeCards={placeCards} />
  </React.StrictMode>,
  document.getElementById('root'));
