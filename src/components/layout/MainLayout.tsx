import { FC, PropsWithChildren } from "react"

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className="bg-background min-h-screen py-2 flex flex-col gap-10 lg:px-20 md:py-8 xl:py-20">
        { children }
    </main>
  )
}

type Props = PropsWithChildren;
