import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function Projects(props) {
  const [projects, setProjects] = useState(null);
  useEffect(() => {

  const getProjectsData = async () => {
    
    const response = await fetch(props.URL + "projects");
    
    const data = await response.json();
    
    setProjects(data);

  };
  
  getProjectsData()}, [props.URL]);

  const loaded = () => {
    return projects?.map((project) => (
      <div className= 'projects-order' key={project.name}>
        <h1 className="project project-names">{project.name}</h1>
        <img className="project-img" src={project.image} alt='' />
        <p className="desc">{project.desc}</p>
        <p className="skills">{project.skills}</p>
        <div>
            <a href={project.git} target="_blank" rel="noreferrer">
          <Button className="gitbtn" variant="dark">Github</Button>
        </a>
        <a href={project.live} target="_blank" rel="noreferrer">
          <Button className="herokubtn" variant="dark">Live Site</Button>
        </a>
        </div>
        </div>
    ));
  };

  return projects ? loaded() : <Spinner className='spinner' animation="grow" />;
}

export default Projects;