import { FC, PropsWithChildren } from "react"

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className="bg-background min-h-screen p-4 flex flex-col items-center gap-10 lg:py-20 ">
        { children }
    </main>
  )
}

type Props = PropsWithChildren;
