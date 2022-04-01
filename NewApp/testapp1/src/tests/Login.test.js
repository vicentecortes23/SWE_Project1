import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

test('renders sign in button', () => {
  render(<Login />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
