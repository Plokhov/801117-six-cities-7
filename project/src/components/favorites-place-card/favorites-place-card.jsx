import React from 'react';
import { Link } from 'react-router-dom';

import { OffersApartmentType, AppRoute } from '../../const';

import placeCardProp from '../place-card/place-card.prop';

function FavoritesPlaceCard({ placeCard }) {
  const {
    previewImage,
    price,
    type,
    title,
    rating,
  } = placeCard;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link
          to={{
            pathname: AppRoute.ROOM,
            state: placeCard,
          }}
        >
          <img className="place-card__image" src={previewImage} width="150" height="110" alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
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
    </article>
  );
}

FavoritesPlaceCard.propTypes = {
  placeCard: placeCardProp,
};


export default FavoritesPlaceCard;