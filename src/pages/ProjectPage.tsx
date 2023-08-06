import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { findProjectByName } from '../utils/findProjectByName';
import { BackArrow } from '../components/Icons';
import { SocialMediaButton } from '../components/SocialMediaButton';
import { Technologies } from '../components/Technologies';
import { useEffect } from 'react';


export const ProjectPage = () => {
  
  const location =  useLocation();
  useEffect(() => {
    window.scrollTo({top: 0});
  }, [])


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
    <article className='bg-background w-full flex flex-col gap-6 min-h-screen p-4 text-white lg:px-36 xl:px-72 lg:justify-center'>
      <div className='flex items-center gap-3 cursor-pointer hover:brightness-110 transition-all duration-200'>
        <BackArrow/>
        <Link to='/'>
          Back to home
        </Link>
      </div>
      <div className='flex flex-col gap-6 self-start'>
        <h4 className='text-4xl font-bold'>{project?.name}</h4>
        <p className='opacity-40'>{project.description}</p>
        <Technologies project={project}/>
      </div>
      <ul className='flex flex-col w-full items-center gap-3 lg:flex-row lg:items-start lg:justify-around'>
        {
          socialMediaItems.map( sociaMediaItem => (
            <SocialMediaButton
              key={sociaMediaItem.name} 
              socialMediaItem={ sociaMediaItem }
              className='bg-primary px-6 py-2 w-4/5 md:w-3/5 rounded-full cursor-pointer hover:scale-105 hover:brightness-105 transition-all duration-200'
            />
          ))
        }
      </ul>
      <div className='flex flex-col gap-3'>
        <p className='opacity-60'>{project.fulldesc}</p>
        <div className='flex flex-col gap-3 md:flex-row md:justify-between lg:mt-5'>
          <img
            className='rounded-xl object-cover md:w-2/5 lg:w-1/2 hover:scale-110 hover:shadow-lg transition-all duration-200' 
            src={project.otherImg} 
            alt={`${project.name} photo`} 
          />
          <img
              className='rounded-xl object-cover md:w-2/5 lg:w-1/2 hover:scale-110 hover:shadow-lg transition-all duration-200' 
              src={project.img} 
              alt={`${project.name} photo`} 
            />
        </div>
      </div>
    </article>
  )
}
