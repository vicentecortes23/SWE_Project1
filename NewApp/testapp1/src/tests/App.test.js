import { render, screen } from '@testing-library/react';
import App from '../App';
/*
test('renders Home page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});
*/
test('renders Login page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Calendar page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calendar/);
  expect(linkElement).toBeInTheDocument();
});