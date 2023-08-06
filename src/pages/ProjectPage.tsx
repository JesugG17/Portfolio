import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { findProjectByName } from '../utils/findProjectByName';
import { BackArrow } from '../components/Icons';
import { SocialMediaButton } from '../components/SocialMediaButton';
import { Technologies } from '../components/Technologies';


export const ProjectPage = () => {
  
  const location =  useLocation();

  const projectName = location.pathname.split('/')[2];
  const project = findProjectByName(projectName);
  
  const socialMediaItems = [
    {
      name: "View source code",
      link: project.code,
      img: "/img/github.png"
    },
    {
      name: "View live project",
      link: project.deploy,
      img: "/img/deploy.png"
    }
  ]

  return (
    <article className='bg-background w-full flex flex-col gap-6 min-h-screen p-4 text-white'>
      <div className='flex items-center gap-3 cursor-pointer hover:brightness-110 transition-all duration-200'>
        <BackArrow/>
        <Link to='/'>
          Back to home
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='text-4xl font-bold'>{project?.name}</h4>
        <p className='opacity-40'>{project.description}</p>
        <Technologies project={project}/>
      </div>
      <ul className='flex flex-col items-center gap-3'>
        {
          socialMediaItems.map( sociaMediaItem => (
            <SocialMediaButton
              key={sociaMediaItem.name} 
              socialMediaItem={ sociaMediaItem }
            />
          ))
        }
      </ul>
      <div className='flex flex-col gap-3'>
        <img
          className='rounded-lg object-cover' 
          src={project.otherImg} 
          alt={`${project.name} photo`} 
        />
        <p>{project.fulldesc}</p>
      </div>
      <img
          className='rounded-lg object-cover' 
          src={project.img} 
          alt={`${project.name} photo`} 
        />
    </article>
  )
}
