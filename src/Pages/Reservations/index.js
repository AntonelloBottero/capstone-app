import ReservationForm from 'components/ReservationForm.js';

export default function Reservations() {
    return (
        <>
            <section className="reservations section">
                <div className="section__inner">
                    <div className="row">
                        <div className="col-12">
                            <h1>Reservations</h1>
                            <p class="body-1">
                                <h2 class="text-h3">Please enter your reservation preferences.</h2>
                                After the reservation is confirmed, you can <b>cancel it anytime by calling us</b> at (709)879-4459.
                            </p>
                        </div>
                        <div className="col-12">
                            <ReservationForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}