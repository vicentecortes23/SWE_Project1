import { render, screen } from '@testing-library/react';
import Calendar from '../pages/Calendar';

test('renders Heading', () => {
  render(<Calendar />);
  const textElement = screen.getByRole('heading');
  expect(textElement).toBeInTheDocument();
});

test('renders Calendar', () => {
    render(<Calendar />);
    const calendarElement = screen.getByTitle(/Google calendar embed/);
    expect(calendarElement).toBeInTheDocument();
  });