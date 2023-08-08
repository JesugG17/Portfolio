import { useEffect } from "react"
import { Intro, Skills, Projects, Contact } from "../components"
import { AboutMe } from "../components/sections/AboutMe"

export const HomePage = () => {

  useEffect(() => {
    const posY = Number(localStorage.getItem('posY')) ?? 0;
    window.scrollTo({ top: posY });
    localStorage.clear();
  }, []);

  return (
    <main className="bg-background min-h-screen p-4 flex flex-col items-center gap-10 lg:py-20 ">
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
