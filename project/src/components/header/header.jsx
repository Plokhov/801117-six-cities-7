import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const {isAuthorization = true} = props;

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorization &&
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/favoriets">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>}
              <li className="header__nav-item">
                <a className="header__nav-link" href="/login">
                  <span className="header__signout">
                    {isAuthorization ? 'Sign out' : 'Sign In'}
                  </span>
                </a>
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
