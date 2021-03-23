import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders an app', () => {
  const res = render(<Counter />);
  // console.log(res);
  expect(screen.getByText('Count title:'));
});
