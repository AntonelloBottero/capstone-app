import Nav from '../Nav/index.js';
import Logo from '../assets/imgs/Logo.svg';
import './style.css';
export default function Header() {
    return (
        <header class="section header">
            <div class="section__inner">
                <img src={Logo} alt="Little Lemon" class="footer__logo" />
                <Nav />
            </div>
        </header>
    )
}