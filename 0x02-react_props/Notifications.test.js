// Notifications.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

test('renders NotificationItem elements', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'test1', html: 'test1' },
    { id: 2, type: 'success', value: 'test2', html: 'test2' },
  ];
  render(<Notifications notifications={notifications} />);
  const notificationItems = screen.getAllByRole('listitem');
  expect(notificationItems).toHaveLength(2);
});

test('renders the right html for the first NotificationItem element', () => {
  const notifications = [{ id: 1, type: 'default', value: 'test1', html: 'test1' }];
  render(<Notifications notifications={notifications} />);
  const notificationItem = screen.getByText('test1');
  expect(notificationItem).toBeInTheDocument();
  expect(notificationItem.innerHTML).toBe('test1');
});
