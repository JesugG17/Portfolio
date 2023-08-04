import { Contact } from "./components/Contact"
import { Intro } from "./components/Intro"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"


export const App = () => {
  return (
    <main className="bg-background min-h-screen py-20 flex flex-col gap-10">
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
