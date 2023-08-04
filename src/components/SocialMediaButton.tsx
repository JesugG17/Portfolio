import { FC } from "react"
import { SocialMedia } from "../types/socialMedia.interface"
import { Github } from "./Icons"

export const SocialMediaButton: FC<Props> = ({ socialMediaItem }) => {
  
  console.log(socialMediaItem.link);
  return (
    <div className="bg-primary w-52 px-6 py-3 rounded-full flex justify-center items-center gap-3 ">
      <a className="cursor-pointer" href={socialMediaItem.link} target="_blank">
         <img className="w-8 h-8 invert" src={socialMediaItem.img} alt={`${socialMediaItem.name} icon`} />
      </a>
      <strong className="text-start flex-1">{ socialMediaItem.name }</strong>
    </div>
  )
}

type Props = {
  socialMediaItem: SocialMedia
}
