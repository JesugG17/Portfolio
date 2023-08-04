import { SocialMediaButton } from "./SocialMediaButton";
import socialMedias from "../mocks/socialMedia.json";

export const Intro = () => {
  return (
    <article className="flex flex-col items-center gap-8 text-white">
      <img
        className="h-32 w-32 rounded-full object-cover"
        src="/img/photo.jpg"
        alt=""
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl text-center">Hi, I´m Jesus Gastelum</h2>
        <p className="opacity-60 text-xl text-center">Web develoepr</p>
      </div>
      <ul className="w-full mt-5 flex flex-col items-center gap-3 ">
        {socialMedias.map((socialMedia) => (
          <li
            key={socialMedia.name} 
            className="cursor-pointer w-full flex justify-center"
          >
            <SocialMediaButton socialMediaItem={socialMedia} />
          </li>
        ))}
      </ul>
    </article>
  );
};
