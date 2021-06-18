import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute } from '../../const';

import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import Favoriets from '../favoriets/favoriets';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';

function App({placeCards}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <MainPage placeCards={placeCards}/>
        </Route>
        <Route path={AppRoute.SIGN_IN} exact>
          <SignIn />
        </Route>
        <Route path={AppRoute.FAVORIETS} exact>
          <Favoriets />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
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
