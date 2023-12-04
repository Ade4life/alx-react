// CourseList/CourseListRow.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders header with colspan=2 when textSecondCell does not exist', () => {
  render(<CourseListRow isHeader={true} textFirstCell="Header" />);
  const headerCell = screen.getByText('Header');
  expect(headerCell.colSpan).toBe(2);
});

// Add more tests for header with two cells and for non-header cases
