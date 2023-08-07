import { SocialMediaButton } from "../SocialMediaButton";
import socialMedias from "../../mocks/socialMedia.json";

export const Intro = () => {
  return (
    <article className="flex h-screen justify-center flex-col items-center gap-10 text-white lg:gap-8 md:w-2/4 xl:gap-12">
      <img
        className="h-40 w-40 rounded-full object-cover lg:w-48 lg:h-48"
        src="/img/photo.jpg"
        alt=""
      />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-5xl text-center lg:text-7xl">
          Hi, I´m Jesus Gastelum
        </h2>
        <p className="opacity-60 text-xl text-center lg:text-2xl">
          Web develoepr
        </p>
      </div>
      <ul className="w-full mt-5 flex flex-col items-center gap-3 lg:flex-row lg:justify-center ">
        {socialMedias.map((socialMedia) => (
          <SocialMediaButton
            key={socialMedia.name}
            socialMediaItem={socialMedia}
            className="bg-primary px-6 py-2 w-4/5 rounded-full cursor-pointer hover:scale-105 hover:brightness-105 transition-all duration-200 lg:w-48"
          />
        ))}
      </ul>
    </article>
  );
};
