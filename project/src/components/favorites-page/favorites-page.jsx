import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import FavoritesLocationItem from '../favorites-location-item/favorites-location-item';

import placeCardProp from '../place-card/place-card.prop';

function FavoritesPage(props) {
  const { placeCards = [] } = props;

  const listOfCities = placeCards
    .filter((placeCard) => placeCard.isFavorite)
    .map((placeCard) => placeCard.city.name);

  const listOfUniqueCities = Array.from(new Set(listOfCities));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {listOfUniqueCities.map((city) => (
                <FavoritesLocationItem key={city} city={city} placeCards={placeCards} />
              ))}

            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  placeCards: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesPage;
