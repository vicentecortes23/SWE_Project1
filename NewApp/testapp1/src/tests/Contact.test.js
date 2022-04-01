import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact';

test('renders instagram link', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Instagram/);
  expect(linkElement).toBeInTheDocument();
});

test('renders slack link', () => {
    render(<Contact />);
    const linkElement = screen.getByText(/Slack/);
    expect(linkElement).toBeInTheDocument();
  });

test('renders discord link', () => {
    render(<Contact />);
    const linkElement = screen.getByText(/Discord/);
    expect(linkElement).toBeInTheDocument();
});
