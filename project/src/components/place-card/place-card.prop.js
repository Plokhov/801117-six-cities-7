import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['apartment', 'room', 'house', 'hotel']),
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});
