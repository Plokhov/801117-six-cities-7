import {React, useState} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';
import placeCardProp from '../place-card/place-card.prop';

function PlaceCardsList({placeCards = []}) {
  // eslint-disable-next-line no-unused-vars
  const [activePlaceCard, setActivePlaceCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {placeCards.map((placeCard) => (
        <PlaceCard
          key={placeCard.id}
          placeCard={placeCard}
          onMouseOver={() => setActivePlaceCard(placeCard.id)}
          onMouseLeave={() => setActivePlaceCard(0)}
        />))}
    </div>
  );
}

PlaceCardsList.propTypes = {
  placeCards: PropTypes.arrayOf(placeCardProp).isRequired,
};

export default PlaceCardsList;
