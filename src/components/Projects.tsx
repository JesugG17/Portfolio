import { ProjectCard } from "./ProjectCard"

const fakeProjects = [
  {
    name: "Project1",
    description: 'one description',
    img: "/img/test.jpg"
  },
  {
    name: "Project2",
    description: 'one description',
    img: "/img/test.jpg"
  },
  {
    name: "Project3",
    description: 'one description',
    img: "/img/test.jpg"
  },
  {
    name: "Project4",
    description: 'one description',
    img: "/img/test.jpg"
  },
];

export const Projects = () => {
  return (
    <article className="flex flex-col gap-10">
      <h4 className="text-white text-5xl text-center font-bold">My projects</h4>
      <ul className="w-full flex flex-wrap justify-center gap-2 text-white  md:gap-5">
        {
          fakeProjects.map( (project, index) => (
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
