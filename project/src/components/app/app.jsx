import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoute } from '../../const';

import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';

import placeCardProp from '../place-card/place-card.prop';

function App({placeCards}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <MainPage placeCards={placeCards}/>
        </Route>
        <Route path={AppRoute.SIGN_IN} exact>
          <SignInPage />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesPage placeCards={placeCards} />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <RoomPage placeCards={placeCards}/>
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
  placeCards: PropTypes.arrayOf(placeCardProp).isRequired,
};
