import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index.js';
import Reservations from './Pages/Reservations/index.js';

export default function Main() {
    return (
        <main>
            <Routes> 
                <Route path="/" element={<Home/>}></Route>
                <Route path="/reservations" element={<Reservations/>}></Route>
            </Routes>
        </main>
    )
}