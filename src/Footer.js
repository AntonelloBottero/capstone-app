import LogoSecondary from './assets/imgs/LogoSecondary.png';
import { navItems } from './assets/utils'

export default function Footer() {
    return (
        <footer>
            <img src={LogoSecondary} alt="Little Lemon" />
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
            <address>
                <ul>
                    <li>69 Vico Araratiano</li>
                    <li>(709)879-4459</li>
                    <li>Email Us</li>
                </ul>
            </address>
            <address>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </address>
        </footer>
    )
}