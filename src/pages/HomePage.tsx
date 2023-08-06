import { Intro, Skills, Projects, Contact } from "../components"


export const HomePage = () => {
  return (
    <>
      <Intro />
      {/* <hr className="h-[10px] bg-primary border-0 rounded-lg"/> */}
      <Skills />
      {/* <hr className="h-[10px] bg-primary border-0 rounded-lg"/> */}
      <Projects />
      {/* <hr className="h-[10px] bg-primary border-0 rounded-lg"/> */}
      <Contact />
    </>
  )
}
