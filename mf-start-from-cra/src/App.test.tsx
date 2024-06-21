import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const h1Element = screen.getByText(/Micro Frontend React App/i);
  expect(h1Element).toBeInTheDocument();
  const pElement = screen.getByText(/Based on CRA/i);
  expect(pElement).toBeInTheDocument();
});
