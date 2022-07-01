import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Home = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        fullScreen: {
            zIndex: -9999
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                }
            },
            modes: {
                grab: {
                    distance: 200,
                    links: {
                        color: "#80a0c0",
                        opacity: 1
                    }
                }
            }
        },
        particles: {
            color: "#80a0c0",
            links: {
                color: "#80a0c0",
                distance: 100,
                enable: true,
                opacity: 0.25,
                width: 1
            },
            move: {
                enable: true,
                random: true,
                speed: 2
            },
            opacity: {
                value: 0.25
            }
        }
    };

    return (
        <section id="home" className="transition hidden">
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
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