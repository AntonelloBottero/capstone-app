import {useState, useEffect, useReducer, createContext, useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Pages/Home/index.js';
import Reservations from './Pages/Reservations/index.js';
import ReservationConfirmed from './Pages/ReservationConfirmed.js';
const ReservationContext = createContext();

export default function Main() {
    const navigate = useNavigate();

    // manage available times
    const [timesDate, setTimesDate] = useState(new Date())
    const handleFetchTimes = (date) => {
        setTimesDate(new Date(date || undefined))
    }
    const updateTimes = (state, times) => {
        return times
    }
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [])
    useEffect(() => {
        const fetchTimes = async () => {
            const times = await window.fetchAPI(timesDate)
            dispatchAvailableTimes(times)
        }
        fetchTimes()
    }, [timesDate])

    const submitForm = (formData) => {
        if(window.submitAPI(formData)) {
            navigate('/reservation-confirmed')
        }
    }

    return (
        <main>
            <ReservationContext.Provider value={{availableTimes, fetchTimes: handleFetchTimes, submitForm}}>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/reservations" element={<Reservations/>}></Route>
                    <Route path="/reservation-confirmed" element={<ReservationConfirmed/>}></Route>
                </Routes>
            </ReservationContext.Provider>
        </main>
    )
}

export const useReservationContext = () => useContext(ReservationContext);
