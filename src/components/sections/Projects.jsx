import { projects } from '../../data/portfolio';

export default function Projects() {
  return <section id="work" className="work section">
    <div className="section-heading"><p className="section-label">02 / SELECTED WORK</p><p>Selected projects that bring ideas to life.</p></div>
    <div className="project-grid">
      {projects.map(project => <article className="project" key={project.name}>
        <p className="project-num">{project.number}</p>
        <p className="project-type">WEB APPLICATION</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-stack">{project.stack}</p>
        <div className="project-actions"><a className="project-button" href={project.github} target="_blank" rel="noreferrer">View GitHub <span>↗</span></a><a className="project-button" href={project.demo} target="_blank" rel="noreferrer">Live demo <span>↗</span></a></div>
      </article>)}
    </div>
  </section>;
}
