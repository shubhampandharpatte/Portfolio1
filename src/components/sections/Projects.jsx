import user_info from "../../data/user_info.js";
import Project from "../Project";

function Projects() {
  return (
    <div id="projects">
      <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
        <h2 className="flex ml-16 text-5xl p-4 text-left">
          Projects...
        </h2>
      </div>
      <section
      
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
    >
      {user_info.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        );
      })}
    </section>
    </div>
  );
}

export default Projects;