// App/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('does not render CourseList when isLoggedIn is false', () => {
  render(<App />);
  // Add checks for Login
});

test('renders CourseList when isLoggedIn is true', () => {
  render(<App isLoggedIn={true} />);
  // Add checks for CourseList
});
