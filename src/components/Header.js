import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faTools, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const toggleNav = () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('nav-visible');
    };

    return (
        <header>
            <a className="header-left" href="#home">
                <h1>Weiminh Lam</h1>
            </a>
            <FontAwesomeIcon icon={faBars} onClick={toggleNav} />
            <ul className="nav">
                <li className="nav-item"><a href="#home"><FontAwesomeIcon icon={faHome} />Home</a></li>
                <li className="nav-item"><a href="#skills"><FontAwesomeIcon icon={faTools} />Skills</a></li>
                <li className="nav-item"><a href="#projects"><FontAwesomeIcon icon={faFolder} />Projects</a></li>
                <li className="nav-item"><a href="#contact"><FontAwesomeIcon icon={faEnvelope} />Contact</a></li>
            </ul>
        </header>
    );
};

export default Header;