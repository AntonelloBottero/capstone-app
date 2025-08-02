import { Link } from 'react-router-dom'
import './style.css';

export default function ReservationConfirmed() {
    return (
        <section className="section reservation-confirmed">
            <div className="section__inner">
                <div class="reservation-confirmed__card">
                    <span class="material-symbols-outlined reservation-confirmed__icon text--success">
                        check_circle
                    </span>
                    <h1 class="text--success">Booking confirmed</h1>
                    <p class="body-1">
                        After the reservation is confirmed, you can <b>cancel it anytime by calling us</b> at (709)879-4459.
                    </p>
                    <Link to="/" className="btn bg--secondary">
                        <span class="material-symbols-outlined">
                            home
                        </span>
                        Home
                    </Link>
                </div>
            </div>
        </section>
    )
}