import React from 'react';
import { render } from '@testing-library/react';
import UserDetails from './userDetails';

test('renders learn react link', () => {
  const { getByText } = render(<UserDetails />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
