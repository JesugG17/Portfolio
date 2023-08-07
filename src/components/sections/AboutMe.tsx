import { Title } from "../Title";

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4 mt-7 lg:mt-16">
      <Title title="About me"/>
      <p className="text-center text-gray-400 lg:text-lg">
        Apassionate to solve problems and learn new things every day.
        <br></br>I ❤️ go out with my girlfriend, go to the gym, play videogames,
        and drink cold coffee 🧊☕
      </p>
    </div>
  );
};
