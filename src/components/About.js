import avatar from '../assets/avatar.png';

const About = () => {
    return (
        <section id="about">
            <h1>About</h1>
            <div className="about-content">
                <div className="section-left">
                    <img className="avatar" src={avatar} alt="Weiminh Lam"></img>
                </div>
                <div className="section-right">
                    <p>
                        Hi. My name is Weiminh Lam. I'm a self-taught <b>full-stack web developer</b> with a degree in Computer Science.
                        I've been learning web development since the start of 2021 through online resources such as&nbsp;
                        <a href="https://www.theodinproject.com" target="_blank" rel="noreferrer">The Odin Project</a>.
                    </p>
                    <p>
                        I've always found it fun to build websites and showcase them to the world. I've been creating websites since I
                        was young, using services like <em>GeoCities</em> and <em>WordPress</em>. In fact, I currently run a&nbsp;
                        <a href="https://www.kombatakademy.com" target="_blank" rel="noreferrer">WordPress</a> site that educates people on
                        how to play fighting games! When I'm not coding, I enjoy playing video games, watching anime, and creating&nbsp;
                        <a href="https://www.youtube.com/RedRaptor10" target="_blank" rel="noreferrer">YouTube</a> videos.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;