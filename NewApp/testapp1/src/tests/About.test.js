import { render, screen } from '@testing-library/react';
import About from '../pages/About';


test('renders about us button', () => {
  render(<About />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
