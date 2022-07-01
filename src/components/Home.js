import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <section id="home" className="transition hidden">
            <div className="home-header-container">
                <div className="home-header">
                    <h1>Weiminh Lam</h1>
                    <div className="about">
                        Hello. I am a full-stack web developer with a degree in Computer Science. Let's work together!
                    </div>
                    <a href="https://github.com/RedRaptor10" target="_blank" rel="noreferrer">
                        <button><FontAwesomeIcon icon={faGithub} /><span>View My Code</span></button>
                    </a>
                </div>
                <a className="down-btn" href="#skills"><FontAwesomeIcon icon={faAnglesDown} /></a>
            </div>
        </section>
    );
};

export default Home;