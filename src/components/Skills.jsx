import SkillItem from "./SkillItem";
import { FaPenNib } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      url: "html.svg",
    },
    {
      name: "CSS",
      url: "css.svg",
    },
    {
      name: "JAVASCRIPT",
      url: "javascript2.svg",
    },
    {
      name: "REACT",
      url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      name: "NODE JS",
      url: "https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg",
    },
    {
      name: "EXPRESS",
      url: "express.svg",
    },
    { name: "BOOTSTRAP", url: "bootstrap.svg" },
    {
      name: "MONGO",
      url: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },
    {
      name: "MYSQL",
      url: "mysql.svg",
    },
  ];
  return (
    <div className="skills-container" id="skills">
      <h1>
        SKILLS <FaPenNib />
      </h1>
      <div className="container">
        <div className="row">
          {skills.map((skill) => (
            <div className="col-6 col-md-4">
              <SkillItem skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
