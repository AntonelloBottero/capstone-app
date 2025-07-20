import {useState, useReducer, createContext, useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Pages/Home/index.js';
import Reservations from './Pages/Reservations/index.js';
import ReservationConfirmed from './Pages/ReservationConfirmed.js';
const ReservationContext = createContext();

export default function Main() {
    const navigate = useNavigate();

    // manage available times
    const updateTimes = (state, date) => {
        return window.fetchAPI(new Date(date))
    }
    const initializeTimes = () => {
        const times = window.fetchAPI(new Date())
        return times
    }
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())
    
    const submitForm = (formData) => {
        if(window.submitAPI(formData)) {
            navigate('/reservation-confirmed')
        }
    }

    return (
        <main>
            <ReservationContext.Provider value={{availableTimes, dispatchAvailableTimes, submitForm}}>
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
