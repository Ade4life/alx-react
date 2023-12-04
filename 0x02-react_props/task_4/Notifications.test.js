// Notifications/Notifications.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

test('displays menu item when displayDrawer is false', () => {
  render(<Notifications displayDrawer={false} />);
  // Add checks for menu item visibility
});

// Add more tests for displayDrawer=true and false scenarios
