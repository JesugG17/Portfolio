import { Link }  from 'react-scroll';
import { SocialMediaButton } from "../SocialMediaButton";
import socialMedias from "../../mocks/socialMedia.json";

export const Intro = () => {
  return (
    <article className="flex min-h-screen  flex-col items-center gap-3 text-white lg:gap-8 md:w-2/4">
      <img
        className="h-32 w-32 rounded-full object-cover lg:w-48 lg:h-48"
        src="/img/photo.jpg"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl text-center lg:text-7xl">Hi, I´m Jesus Gastelum</h2>
        <p className="opacity-60 text-xl text-center lg:text-2xl">Web develoepr</p>
      </div>
      <ul className="w-full mt-5 flex flex-col items-center gap-3 lg:flex-row lg:justify-center ">
        {socialMedias.map((socialMedia) => (
          <li
            key={socialMedia.name} 
            className="bg-primary px-6 py-2 w-3/5 rounded-full cursor-pointer hover:scale-105 hover:brightness-105 transition-all duration-200 lg:w-48"
          >
            <SocialMediaButton socialMediaItem={socialMedia} />
          </li>
        ))}
      </ul>
      <p className="text-center text-gray-400 lg:text-lg">
        Apassionate to solve problems and learn new things every day.
        <br></br>
        I ❤️ go out with my girlfriend, go to the gym, play videogames, and drink cold coffee ☕
      </p>
      <Link 
        to="skills"
        onClick={() =>  console.log('click')}
        smooth
        duration={500} 
        className="scroll-smooth mt-3 cursor-pointer w-12 h-12 rounded-full border-2 p-2 animate-bounce bg-black lg:block md:mt-10 lg:mt-2 xl:mt-10"
      >
        <img className="invert animate-pulse" src="/img/arrow.png" alt="" />
      </Link>
    </article>
  );
};
