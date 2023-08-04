import { FC } from "react";
import { SocialMedia } from "../types/socialMedia.interface";

export const SocialMediaButton: FC<Props> = ({ socialMediaItem }) => {
  console.log(socialMediaItem.link);
  return (
    <a
      download="cv-gastelum"
      href={socialMediaItem.link}
      className="bg-primary w-3/5 px-6 py-2 rounded-full flex justify-center items-center gap-3 hover:scale-105 transition-all duration-200"
      target="_blank"
    >
      <img
        className="w-8 h-8 invert"
        src={socialMediaItem.img}
        alt={`${socialMediaItem.name} icon`}
      />
      <strong className="text-center flex-1">{socialMediaItem.name}</strong>
    </a>
  );
};

type Props = {
  socialMediaItem: SocialMedia;
};
