import { FC } from "react";
import { SocialMedia } from "../types/socialMedia.interface";

export const SocialMediaButton: FC<Props> = ({ socialMediaItem }) => {
  return (
    <li
      className="bg-primary px-6 py-2 w-4/5 rounded-full cursor-pointer hover:scale-105 hover:brightness-105 transition-all duration-200 lg:w-48"
    >
      <a
        download="cv-gastelum"
        href={socialMediaItem.link}
        className="w-full flex justify-center items-center gap-3 md:gap-6"
        target="_blank"
      >
        <img
          className="w-8 h-8 invert lg:w-6 lg:h-6"
          src={socialMediaItem.img}
          alt={`${socialMediaItem.name} icon`}
        />
        <strong className="text-center  md:flex-initial">{socialMediaItem.name}</strong>
      </a>
    </li>
  );
};

type Props = {
  socialMediaItem: SocialMedia;
};
