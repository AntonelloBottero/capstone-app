import Nav from './Nav.js';
import Logo from './assets/imgs/Logo.svg';
export default function Header() {
    return (
        <header>
            <img src={Logo} />
            <Nav />
        </header>
    )
}