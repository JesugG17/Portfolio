import { Intro, Skills, Projects, Contact } from "../components"

export const HomePage = () => {
  return (
    <main className="bg-background min-h-screen p-4 flex flex-col items-center gap-10 lg:py-20 ">
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
