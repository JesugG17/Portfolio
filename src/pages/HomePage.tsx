import { Intro, Skills, Projects, Contact } from "../components"


export const HomePage = () => {
  return (
    <main className="bg-background min-h-screen py-2 flex flex-col gap-10 lg:px-20 md:py-8 xl:py-20">
      <Intro />
      <hr/>
      <Skills />
      <hr/>
      <Projects />
      <hr/>
      <Contact />
    </main>
  )
}
