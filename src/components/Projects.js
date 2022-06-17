import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faEye, faCode, faPause } from '@fortawesome/free-solid-svg-icons';
import projects from '../data/projects';

// Import Project Thumbs From Assets Using Webpack
const thumbs = {};

function importAll(r) {
    return r.keys().forEach((key) => (thumbs[key] = r(key)));
}

importAll(require.context('../assets/projects', false, /\.(png|jpe?g|svg)$/)); // require.context(directory, (useSubdirectories = true), (regExp));

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            {projects.map((project, i) => {
                return (
                    <div key={i} className="card">
                        <div className="card-title">
                            <h2>{project.name}</h2>
                        </div>
                        <div className="card-content">
                            <div className="project-thumb-container">
                                <div id={'project-thumb-' + (i + 1)} className="project-thumb" style={{ backgroundImage: 'url(' + thumbs['./' + project.thumb] + ')' }}></div>
                            </div>
                            <div className="project-details">
                                <div className="project-details-top">
                                    <p>{project.description}</p>
                                    <div className="project-tools">
                                        <FontAwesomeIcon icon={faTools} />{project.tools}
                                    </div>
                                </div>
                                <div className="project-btns">
                                    <a href={project.source} target="_blank" rel="noreferrer">
                                        <button><FontAwesomeIcon icon={faCode} />Source Code</button>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noreferrer">
                                        <button><FontAwesomeIcon icon={faEye} />View Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Projects;