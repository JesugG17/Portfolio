import { ProjectCard } from "../ProjectCard"
import projects from '../../mocks/projects.json';
import { Title } from "../Title";

export const Projects = () => {
  return (
    <article className="flex min-h-screen  flex-col justify-center gap-10 md:w-2/4">
      <Title title="Projects" />
      <ul className="w-full flex flex-col flex-wrap justify-center items-center gap-5 text-white  md:gap-5 md:flex-row md:items-stretch">
        {
          projects.map( (project, index) => (
            <ProjectCard 
              key={index}
              project={project}
            />
          ))
        }          
      </ul>
    </article>
  )
}
