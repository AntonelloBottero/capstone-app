import {useState, useReducer, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index.js';
import Reservations from './Pages/Reservations/index.js';
const ReservationContext = createContext();

export default function Main() {
    const [loadingTimes, setLoadingTimes] = useState(false)
    const updateTimes = (state, date) => {
        return state
    }
    const initializeTimes = () => {
        const times = window.fetchAPI(new Date())
        return times
    }
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())
    
    return (
        <main>
            <ReservationContext.Provider value={{availableTimes, loadingTimes, dispatchAvailableTimes}}>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/reservations" element={<Reservations/>}></Route>
                </Routes>
            </ReservationContext.Provider>
        </main>
    )
}

export const useReservationContext = () => useContext(ReservationContext);
