import React from 'react';
import PropTypes from 'prop-types';

function Owner(props) {
  const {host, description} = props;

  const classNameIsPro = `property__avatar-wrapper user__avatar-wrapper ${host.isPro && 'property__avatar-wrapper--pro'}`;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={classNameIsPro}>
          <img
            className="property__avatar user__avatar"
            src={host.avatarUrl}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">
          {host.name}
        </span>
        {host.isPro && (
          <span className="property__user-status">
          Pro
          </span>
        )}
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

Owner.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
};

export default Owner;
