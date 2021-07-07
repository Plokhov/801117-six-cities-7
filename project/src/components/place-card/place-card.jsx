import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute, OffersApartmentType } from '../../const';

import placeCardProp from './place-card.prop';

function PlaceCard(props) {
  const {placeCard, onMouseOver} = props;
  const {
    isPremium = false,
    isFavorite = false,
    previewImage,
    price,
    type,
    title,
    rating,
  } = placeCard;

  let classNameIsFavorite = 'place-card__bookmark-button button';
  if(isFavorite) {
    classNameIsFavorite += ' place-card__bookmark-button--active';
  }

  return (
    <article className="cities__place-card place-card" onMouseOver={onMouseOver}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link
          to={{
            pathname: AppRoute.ROOM,
            state: placeCard,
          }}
        >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNameIsFavorite} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={{
              pathname: AppRoute.ROOM,
              state: placeCard,
            }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{OffersApartmentType[type]}</p>
      </div>
    </article>);
}

PlaceCard.propTypes = {
  placeCard: placeCardProp,
  onMouseOver: PropTypes.func,
};

export default PlaceCard;
