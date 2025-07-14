import Nav from 'Nav/index.js';
import Logo from 'assets/imgs/Logo.svg';
import './style.css';
export default function Header() {
    return (
        <header className="section header">
            <div className="section__inner">
                <img src={Logo} alt="Little Lemon" className="footer__logo" />
                <Nav />
            </div>
        </header>
    )
}