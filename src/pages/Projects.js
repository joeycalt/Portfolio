import { useState, useEffect } from "react";

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
        <p>{project.skills}</p>
        <div>
            <a href={project.git}>
          <button className="gitbtn">Github</button>
        </a>
        <a href={project.live}>
          <button className="herokubtn">Live Site</button>
        </a>
        </div>
        </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;