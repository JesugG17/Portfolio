import { FC } from "react";

export const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <li className="bg-primary w-3/4 rounded-lg p-2 flex flex-col gap-4 md:w-1/4 md:p-3">
      <div className="bg-primary flex gap-1">
        {/* TODO: poner tecnologias del proyecto */}
      </div>
      <div>
        <h5>{ project.name }</h5>
        <p className="opacity-30">{ project.description }</p>
      </div>
      <img className="rounded" src={project.img} alt={`${project.name} photo`} />
    </li>
  );
};

type Props = {
  project: { name: string, description: string, img: string}
}