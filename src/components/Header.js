const Header = () => {
    return (
        <header>
            <a className="header-left" href="#home">
                <h1 className="title">Weiminh Lam</h1>
            </a>
            <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
};

export default Header;