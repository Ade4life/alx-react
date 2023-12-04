// NotificationItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders NotificationItem without crashing', () => {
  render(<NotificationItem type="default" value="test" html={{ __html: 'test' }} />);
});

test('renders correct html by passing dummy type and value props', () => {
  render(<NotificationItem type="default" value="test" html={{ __html: 'test' }} />);
  const notificationItem = screen.getByText('test');
  expect(notificationItem).toBeInTheDocument();
  expect(notificationItem).toHaveAttribute('data-notification-type', 'default');
});

test('renders correct html by passing dummy html prop', () => {
  render(<NotificationItem type="default" value="test" html={{ __html: '<u>test</u>' }} />);
  const notificationItem = screen.getByText('test');
  expect(notificationItem).toBeInTheDocument();
  expect(notificationItem.innerHTML).toBe('<u>test</u>');
});
