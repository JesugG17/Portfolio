import { FC } from "react";

export const Title: FC<Props> = ({ title }) => {
  return (
    <div>
      <p className="text-2xl md:text-4xl flex items-center text-center text-white before:inline-block before:content-[''] before:border-b-2 before:border-b-slate-600 before:flex-1 before:mr-4 after:inline-block after:content-[''] after:border-b-2 after:border-b-slate-600 after:flex-1 after:ml-4">
        { title }
      </p>
    </div>
  )
}

type Props = {
    title: string;
}
