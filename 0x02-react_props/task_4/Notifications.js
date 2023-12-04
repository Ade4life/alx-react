// Notifications/Notifications.js
import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
  return (
    <div>
      <div className={`menuItem ${displayDrawer ? 'show' : 'hide'}`}>Your notifications</div>
      <div className={`Notifications ${displayDrawer ? 'show' : 'hide'}`}>
        {/* Your notifications rendering logic */}
      </div>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
