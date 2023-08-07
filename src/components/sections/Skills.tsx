import skills from "../../mocks/skills.json";
import { Element } from "react-scroll";
import { Title } from "../Title";

export const Skills = () => {
  return (
    <Element
      name="skills"
      className="p-4 min-h-screen flex flex-col justify-center gap-8 md:w-2/4 "
    >
      <Title title="Skills" />
      <ul className="flex flex-wrap w-full gap-3 justify-center lg:gap-5 xl:gap-10 h-full ">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col justify-between items-center gap-4 bg-black bg-opacity-30 rounded-lg shadow p-2 w-2/5 hover:scale-105 transition-all hover:ease-in duration-200 cursor-pointer lg:w-1/4 lg:p-4"
          >
            <img
              className={`w-3/4 ${skill.name === "Express" ? "invert" : ""} ${
                skill.name === "React" && "animate-spin-slow "
              }
                `}
              src={skill.logo}
              alt={`${skill.name} logo`}
            />
            <p className="text-gray-500 lg:text-lg">{skill.name}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 items-center opacity-50">
        <strong className="text-white text-center">
          Currently learning...
        </strong>
        <div className="flex gap-2">
          <div className="flex gap-2 items-center rounded-lg bg-black border-2 p-2">
            <img
              className="w-8 h-8 animate-pulse"
              src="/img/skills/nestjs.svg"
              alt="Nestjs logo"
            />
            <strong className="text-white">Nestjs</strong>
          </div>
          <div className="flex gap-2 items-center rounded-lg bg-black border-2 p-2">
            <img
              className="w-8 h-8 animate-pulse"
              src="/img/skills/nextjs.svg"
              alt="Nestjs logo"
            />
            <strong className="text-white">Nextjs</strong>
          </div>
        </div>
      </div>
    </Element>
  );
};
