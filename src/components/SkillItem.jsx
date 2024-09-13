const SkillItem = ({ skill }) => {
  return (
    <div class="card skill-card">
      <img src={skill.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{skill.name}</h5>
      </div>
    </div>
  );
};

export default SkillItem;
