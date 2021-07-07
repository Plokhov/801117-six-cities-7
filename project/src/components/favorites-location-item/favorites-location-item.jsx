import React from 'react';
import PropTypes from 'prop-types';

import FavorietsPlaceCard from '../favorites-place-card/favorites-place-card';

import placeCardProp from '../place-card/place-card.prop';

function FavorietsLocationItem(props) {
  const { city, placeCards } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {placeCards
          .filter((placeCard) => placeCard.isFavorite && placeCard.city.name === city)
          .map((placeCard) => <FavorietsPlaceCard key={placeCard.id} placeCard={placeCard}/>)}
      </div>
    </li>
  );
}

FavorietsLocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  placeCards: PropTypes.arrayOf(placeCardProp).isRequired,
};

export default FavorietsLocationItem;
