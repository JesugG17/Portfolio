import { Intro, Skills, Projects, Contact } from "../components"


export const HomePage = () => {
  return (
    <main className="bg-background min-h-screen p-4 flex flex-col items-center gap-10 lg:py-20 ">
      <Intro />
      {/* <hr className="h-[10px] bg-primary border-0 rounded-lg"/> */}
      <Skills />
      {/* <hr className="h-[10px] bg-primary border-0 rounded-lg"/> */}
      <Projects />
      {/* <hr className="h-[10px] bg-primary border-0 rounded-lg"/> */}
      <Contact />
    </main>
  )
}
