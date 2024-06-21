import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const h1Element = screen.getByText(/Micro Frontend App from CRA/i);
  expect(h1Element).toBeInTheDocument();
});
