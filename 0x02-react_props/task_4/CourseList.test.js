// CourseList/CourseList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

test('renders CourseList without crashing', () => {
  render(<CourseList />);
  // Add more checks for each row
});

// Add a test for isLoggedIn=true
