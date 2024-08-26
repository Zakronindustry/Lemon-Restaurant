import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders booking form and validates inputs', () => {
  render(<App />);
  
  // Check if form elements are present
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  
  // Simulate user input
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
  
  // Submit form
  fireEvent.click(screen.getByText(/book table/i));
  
  // Check if error messages are displayed
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/time is required/i)).toBeInTheDocument();
  expect(screen.getByText(/number of guests must be a positive number/i)).toBeInTheDocument();
});