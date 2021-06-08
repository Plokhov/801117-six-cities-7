import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';

function App({placeCards}) {
  return <MainPage placeCards={placeCards} />;
}

export default App;


App.propTypes = {
  placeCards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
