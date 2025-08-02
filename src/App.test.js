import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationForm from './components/ReservationForm';
import { useReservationContext } from './Main.js';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];
const mockFetchTimes = jest.fn();
const mockSubmitForm = jest.fn();

jest.mock('./Main.js', () => ({
  useReservationContext: jest.fn(),
}));

describe('ReservationForm', () => {
  beforeEach(() => {
    useReservationContext.mockReturnValue({
      availableTimes: mockAvailableTimes,
      fetchTimes: mockFetchTimes,
      submitForm: mockSubmitForm,
    });
  });

  test('Checks if options for time field are available', async () => {
    render(<ReservationForm />);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const options = within(timeSelect).getAllByRole('option');

    const timeRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;
    options.forEach(option => {
        if (option.value !== '') {
            expect(option.value).toMatch(timeRegex);
        }
    });
  });

  test('check Reservation Form fields HTML5 validation', async () => {
    render(<ReservationForm />);

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Book now/i });

    expect(dateInput).toHaveAttribute('required');
    expect(timeSelect).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('required');
    expect(occasionSelect).toHaveAttribute('required');

    expect(submitButton).toBeDisabled();
  });
});
