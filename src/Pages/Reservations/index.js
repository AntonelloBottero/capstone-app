import ReservationForm from 'components/ReservationForm.js';

export default function Reservations() {
    return (
        <>
            <section className="reservations section">
                <div className="section__inner">
                    <div className="row">
                        <div className="col-12">
                            <h1>Reservations</h1>
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