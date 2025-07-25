import { Link } from 'react-router-dom'
import { useState } from 'react'
import { navItems } from 'assets/utils'
import './style.css';

export default function Nav() {
    const  [mobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <button className="nav-toggler btn btn--icon interaction" onClick={() => setMobileMenu(!mobileMenu)}>
                <span className="material-symbols-outlined">
                    {mobileMenu ? 'close' : 'menu'}
                </span>
            </button>
            <nav className={"nav" + (mobileMenu ? " mobile-menu-open" : "")}>
                <ul>
                    {navItems.map(item => (
                        <li key={item.href} value={item.href}>
                            <Link to={item.href} >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}