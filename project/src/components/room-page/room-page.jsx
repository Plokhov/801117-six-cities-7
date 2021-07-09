import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Header from '../header/header';
import Owner from '../owner/owner';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import NearbyPlaceCard from '../nearby-place-card/nearby-place-card';

import {ApartmentType} from '../../const';

import placeCardProp from '../place-card/place-card.prop';

function RoomPage({ placeCards }) {
  const { id } = useParams();
  const currentPlaceCard = placeCards.find((placeCard) => placeCard.id === +id);

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    reviews,
  } = currentPlaceCard;

  const nearbyPlaceCards = placeCards.filter((placeCard) =>
    (placeCard.city.name === currentPlaceCard.city.name && placeCard.id !== currentPlaceCard.id));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating) * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ApartmentType[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <Owner host={host} description={description} />

              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  {reviews.map((review) =>
                    <Review key={review.user.name + review.id} review={review}/>)}
                </ul>

                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyPlaceCards
                .slice(0, 3)
                .map((placeCard) => <NearbyPlaceCard key={id} placeCard={placeCard} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  placeCards: PropTypes.arrayOf(placeCardProp).isRequired,
};

export default RoomPage;
