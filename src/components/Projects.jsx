import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projects = [
    {
      name: "Myntra Clone",
      url: "myntra-image.png",
    },
    {
      name: "To-Do List",
      url: "myntra-image.png",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>PROJECTS</h1>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-10 col-md-6 ">
              <ProjectItem project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
