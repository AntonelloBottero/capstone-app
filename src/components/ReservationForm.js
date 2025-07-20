import { useState } from 'react'
import { useReservationContext } from 'Main.js'

export default function ReservationForm() {
    const { availableTimes, fetchTimes, submitForm } = useReservationContext();

    const [date, setDate] = useState({ value: new Date().toISOString().slice(0, 10) })
    const [time, setTime] = useState({value: '', touched: false})
    const [guests, setGuests] = useState({value: 1, touched: false})
    const [occasion, setOccasion] = useState({ value: '', touched: false })

    const handleDateChange = (e) => {
        setDate({ value: e.target.value, touched: true })
        setTime({value: '', touched: false})
        fetchTimes(date)
    }

    // form validation
    const isDateValid = () => {
        return date.value && date.value >= new Date().toISOString().slice(0, 10)
    }
    const isGuestsValid = () => {
        return time.value > 0 && time.value < 11
    }
    const getIsFormValid = () => {
        if(!isDateValid()) { return false }
        if(!time.value) { return false }
        if(!isGuestsValid()) { return false}
        if(!occasion.value) { return false }
        return true
    }

    // form submit
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!getIsFormValid()) { return undefined}

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
                <div class="form-field">
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date.value}
                        onChange={handleDateChange}
                    />
                    {!isDateValid() && date.touched && <div class="form-field__error">Select a date from today on</div>}
                </div>
                <div class="form-field">
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time.value}
                    onChange={e => setTime({value: e.target.value, touched: true})}
                >
                    <option value=""></option>
                    {availableTimes.map(at => <option key={at} value={at}>{at}</option>)}
                </select>
                {!time.value && time.touched && <div class="form-field__error">Select a time</div>}
                </div>
                <div class="form-field">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests.value}
                        onChange={e => setGuests({ value: e.target.value, touched: true})}
                    />
                    {!isGuestsValid() && guests.touched && <div class="form-field__error">Select number of guests (min 1, max 10)</div>}
                </div>
                <div class="form-field">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion.value}
                        onChange={e => setOccasion({ value: e.target.value, touched: true })}
                    >
                        <option value=""></option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    {!occasion.value && occasion.touched && <div class="form-field__error">Select an occasion</div>}
                </div>
                <input type="submit" value="Make Your reservation" disabled={!getIsFormValid()} />
            </form>
        </>
    )
}