// import { Routes, Route, Link } from 'react-router-dom'
import { navItems } from './assets/utils'

export default function Nav() {
    return (
        <nav>
            <ul>
                {navItems.map(item => (
                    <li>
                        <a href={item.href}>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}