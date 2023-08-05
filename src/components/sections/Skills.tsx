import skills from '../../mocks/skills.json';
import { Element } from 'react-scroll';

export const Skills = () => {
  return (
    <Element name='skills' className='px-4 min-h-screen flex flex-col justify-center gap-8 '>
      <h4 className="text-center text-5xl text-white font-bold">Skills</h4>
      <ul className='flex flex-wrap w-full gap-3 justify-center lg:gap-5 xl:gap-10 h-full '>
        {
          skills.map( skill => (
            <li
              key={skill.name} 
              className='flex flex-col justify-between items-center gap-4 bg-black bg-opacity-30 rounded-md shadow p-2 w-2/5 hover:scale-105 transition-all hover:ease-in duration-200 cursor-pointer md:w-1/5 lg:w-1/6 '
            >
              <img 
              className={
                `w-3/4 ${ skill.name === 'Express' ? 'invert' : ''} ${ skill.name === 'React' && 'animate-spin-slow '}
                `
              } 
              src={skill.logo} 
              alt={`${skill.name} logo`} />
              <p className='text-gray-500 lg:text-lg'>{skill.name}</p>
            </li>
          ))
        }
      </ul>
    </Element>
  )
}
