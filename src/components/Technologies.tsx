import { FC } from 'react';
import { Project } from '../types/project.type';

export const Technologies: FC<Props> = ({ project }) => {
  return (
    <div>
        <ul className='w-full flex gap-4 flex-wrap'>
           {
            project.technologies.map( technology => (
                <li
                    className='flex gap-2 p-2 rounded-md bg-black border-2'
                    key={technology.name}
                >
                    <img
                        className={`w-4 h-4 ${technology.name === 'ExpressJS' && 'invert'}`}
                        src={technology.img} 
                        alt={`${technology.name} logo`} 
                    />
                    <strong className='text-xs'>{technology.name}</strong>
                </li>
            ))
           } 
        </ul>
    </div>
  )
}

type Props = {
    project: Project;
}
