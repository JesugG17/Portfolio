import skills from '../mocks/skills.json';


export const Skills = () => {
  return (
    <article className='px-4 min-h-screen flex flex-col gap-8 '>
      <h4 className="text-center text-5xl text-white font-bold">Skills</h4>
      <ul className='flex flex-wrap w-full gap-3  justify-center'>
        {
          skills.map( skill => (
            <li
              key={skill.name} 
              className='flex justify-center bg-black bg-opacity-30 rounded shadow p-2 w-2/5 hover:scale-105 transition-all hover:ease-in duration-200 cursor-pointer md:w-1/5'
            >
              <img className={`w-3/4 ${ skill.name === 'Express' ? 'invert' : ''} ${ skill.name === 'React' && 'animate-spin-slow '}`} src={skill.logo} alt={`${skill.name} logo`} />
            </li>
          ))
        }
      </ul>
    </article>
  )
}
