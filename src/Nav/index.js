// import { Routes, Route, Link } from 'react-router-dom'
import { navItems } from '../assets/utils'
import './style.css';

export default function Nav() {
    return (
        <nav className="nav">
            <ul>
                {navItems.map(item => (
                    <li>
                        <a href={item.href} className="">
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}