import {React, useState} from 'react';

import ReviewFormRatingStar from '../review-form-rating-star/review-form-rating-star';

function ReviewForm() {
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [comment, setComment] = useState('');

  const stars = [5, 4, 3, 2, 1];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) =>
          <ReviewFormRatingStar key={`star-${star}`} ratingValue={star} setRating={setRating}/>)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => setComment(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
