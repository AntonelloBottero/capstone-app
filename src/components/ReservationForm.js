import { useEffect, useState } from 'react'
import { useReservationContext } from 'Main.js'

export default function ReservationForm() {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const { availableTimes, dispatchAvailableTimes, submitForm } = useReservationContext();

    const [time, setTime] = useState('19:00')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('')

    const handleDateChange = (e) => {
        setDate(e.target.value)
        dispatchAvailableTimes(date)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        submitForm({
            date,
            time,
            guests,
            occasion
        })
    }

    return (
        <>
            <h2>Book now</h2>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleFormSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date" 
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select 
                    id="res-time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                >
                    {availableTimes.map(at => <option key={at} value={at}>{at}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}