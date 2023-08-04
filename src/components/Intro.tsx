import { SocialMediaButton } from "./SocialMediaButton";
import socialMedias from "../mocks/socialMedia.json";

console.log(socialMedias);
export const Intro = () => {
  return (
    <article className="flex flex-col items-center gap-5 text-white">
      <img
        className="h-32 w-32 rounded-full object-cover"
        src="/img/photo.jpg"
        alt=""
      />
      <h2 className="text-3xl text-center">Hi, I´m Jesus Gastelum</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {socialMedias.map((socialMedia) => (
          <li>
            <SocialMediaButton socialMediaItem={socialMedia} />
          </li>
        ))}
      </ul>
    </article>
  );
};
