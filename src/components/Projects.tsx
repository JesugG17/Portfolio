import { ProjectCard } from "./ProjectCard"

const fakeProjects = [
  {
    id: 1,
    name: "Project1",
    description: 'one description',
    img: "/img/test.jpg"
  },
  {
    id: 2,
    name: "Project2",
    description: 'one description',
    img: "/img/test.jpg"
  },
  {
    id: 3,
    name: "Project3",
    description: 'one description',
    img: "/img/test.jpg"
  },
  {
    id: 4,
    name: "Project4",
    description: 'one description',
    img: "/img/test.jpg"
  },
];

export const Projects = () => {
  return (
    <article className="flex min-h-screen flex-col gap-10">
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
