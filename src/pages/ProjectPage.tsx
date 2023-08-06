import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { findProjectByName } from '../utils/findProjectByName';

export const ProjectPage = () => {
  
  const location =  useLocation();
  const projectName = location.pathname.split('/')[2];
  const project = findProjectByName(projectName);
  
  return (
    <article className='flex flex-col gap-2 text-white'>
       <h1>Hola</h1>
    </article>
  )
}
