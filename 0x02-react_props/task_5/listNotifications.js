// Notifications/Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <div>
      <div className={`menuItem ${displayDrawer ? 'show' : 'hide'}`}>Your notifications</div>
      <div className={`Notifications ${displayDrawer ? 'show' : 'hide'}`}>
        {listNotifications.length === 0 ? (
          <NotificationItem textFirstCell="No new notification for now" />
        ) : (
          listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))
        )}
      </div>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
