import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {AppRoute} from '../../const';

function Header(props) {
  const {isAuthorization = true} = props;

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink className="header__logo-link" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorization &&
                <li className="header__nav-item user">
                  <NavLink className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </NavLink>
                </li>}
              <li className="header__nav-item">
                <NavLink className="header__nav-link" to={AppRoute.SIGN_IN}>
                  <span className="header__signout">
                    {isAuthorization ? 'Sign out' : 'Sign In'}
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isAuthorization: PropTypes.bool,
};

export default Header;
