// Notifications/Notifications.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  // ... (existing tests)

  test('renders No new notification for now when listNotifications is empty', () => {
    render(<Notifications listNotifications={[]} />);
    const noNotificationMessage = screen.getByText('No new notification for now');
    expect(noNotificationMessage).toBeInTheDocument();
  });

  test('renders NotificationItem for each element in listNotifications', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'test1', html: { __html: 'test1' } },
      { id: 2, type: 'success', value: 'test2', html: { __html: 'test2' } },
    ];
    render(<Notifications listNotifications={notifications} />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems).toHaveLength(notifications.length);
  });
});
