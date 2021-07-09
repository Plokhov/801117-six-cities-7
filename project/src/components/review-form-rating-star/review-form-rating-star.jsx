import React from 'react';
import PropTypes from 'prop-types';

function ReviewFormRatingStar(props) {
  const {ratingValue, setRating} = props;

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingValue}
        id={`${ratingValue}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${ratingValue}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
        onClick={() => setRating(ratingValue)}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

ReviewFormRatingStar.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default ReviewFormRatingStar;
