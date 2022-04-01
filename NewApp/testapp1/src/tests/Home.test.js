import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders sign in button', () => {
  render(<Home />);
  const imageElement = screen.getByRole('img');
  expect(imageElement).toBeInTheDocument();
});
