import { render, screen } from "@testing-library/react";
import ReservationForm from 'components/ReservationForm';

test('Renders the BookingForm heading', () => {
    render(<ReservationForm />);
    const headingElement = screen.getByText("Book now");
    expect(headingElement).toBeInTheDocument();
})