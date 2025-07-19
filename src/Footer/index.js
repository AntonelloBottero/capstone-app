import LogoSecondary from 'assets/imgs/LogoSecondary.png';
import { navItems } from 'assets/utils'
import './style.css';

export default function Footer() {
    return (
        <footer className="footer section bg--elevated">
            <div className="section__inner">
                <img src={LogoSecondary} alt="Little Lemon" className="footer__logo" />
                <div className="footer__menus">
                    <nav className="footer__menu">
                        <div className="subtitle text--primary footer__menu-title">
                            Doormat Navigation
                        </div>
                        <ul>
                            {navItems.map(item => (
                                <li key={item.href}>
                                    <a href={item.href}>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <address className="footer__menu">
                        <div className="subtitle text--primary footer__menu-title">
                            Contact
                        </div>
                        <ul>
                            <li>69 Vico Araratiano</li>
                            <li>(709)879-4459</li>
                            <li>Email Us</li>
                        </ul>
                    </address>
                    <address className="footer__menu">
                        <div className="subtitle text--primary footer__menu-title">
                            Socials
                        </div>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </address>
                </div>
            </div>
        </footer>
    )
}