import { FC, useState } from 'react';
import { Link } from 'react-router-dom'
import { CodeIcon, DeployIcon } from "./Icons";

export const ProjectCard: FC<Props> = ({ project }) => {

  const [blur, setBlur] = useState(true);
 

  return (
    <li
      className="bg-primary relative w-3/4 max-h-[300px] overflow-hidden rounded-lg flex flex-col gap-4 md:w-1/4"
    >
      <img 
     
        className={`w-full h-full  rounded-lg ${ blur && 'blur'}`} src={project.img} alt="" 
      />
      <div
        onMouseEnter={() => setBlur(false)}
        onMouseLeave={() => setBlur(true)}
        className={`absolute transition-all duration-300 bg-black w-full h-full bg-opacity-25 flex flex-col justify-end gap-1 ${!blur && 'opacity-0'}`}
      >
        <div className="w-full">
          <h4 className="text-center font-bold">{project.name}</h4>
        </div>
        <div className="bg-black p-2 flex justify-between text-gray-400">
            <div className="flex gap-2 items-center hover:brightness-125 transition-all duration-200">
              <CodeIcon/>
              <a target="_blank" href="https://github.com/JesugG17/todolist-ui">Code</a>
            </div>
            <Link
              className="hover:brightness-125 transition-all duration-200"
              to={`/project/${project.name}`}
            >
              Details
            </Link>
            <div className="flex gap-2 items-center hover:brightness-125 transition-all duration-200">
              <DeployIcon />
              <a target="_blank" href="https://tasks-api-production-3564.up.railway.app/#/auth/login">Deploy</a>
            </div>
        </div>
      </div>
    </li>
  );
};

type Props = {
  project: { 
    name: string, 
    shortView: string, 
    description: string, 
    img: string,
    hoverImg: string;
  }
}