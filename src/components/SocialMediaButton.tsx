import { FC } from "react";
import { SocialMedia } from "../types/socialMedia.interface";

export const SocialMediaButton: FC<Props> = ({ socialMediaItem }) => {
  return (
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
      <strong className="text-center flex-1 md:flex-initial">{socialMediaItem.name}</strong>
    </a>
  );
};

type Props = {
  socialMediaItem: SocialMedia;
};
