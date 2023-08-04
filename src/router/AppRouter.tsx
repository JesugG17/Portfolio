import { Route, Routes, Navigate } from "react-router"
import { ContactPage, HomePage, ProjectPage } from "../pages"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/project/:id" element={ <ProjectPage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="/*" element={ <Navigate to='/' />} />
    </Routes>
  )
}
