import styles from "./projects.module.css";
import Project from "./Project.js";

const Projects = () => {
  const data = [1, 2, 3];
  return (
    <div id="projects" className={`${styles.projects} mb-35`}>
      <h2 className="font-size-24 ml-11 mb-19">My Projects</h2>
      {data.map((ele, index) => (
        <Project key={index} data={[1, 2, 3, 4]} />
      ))}
    </div>
  );
};

export default Projects;
