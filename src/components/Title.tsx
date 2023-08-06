import { FC } from "react";

export const Title: FC<Props> = ({ title }) => {
  return (
    <h4 className="text-center text-5xl text-white font-bold bg-primary p-2 rounded-full">
        { title }
    </h4>
  )
}

type Props = {
    title: string;
}
