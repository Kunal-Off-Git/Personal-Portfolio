const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <div class=" proj-imgbx">
        <img src={project.url} class="card-img-top" alt="..." />
        <div class="card-body proj-txbx">
          <h5 class="card-title">{project.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
