import { Route, Routes, Navigate } from "react-router"
import { ContactPage, HomePage, ProjectPage } from "../pages"
import { MainLayout } from "../components/layout/MainLayout"

export const AppRouter = () => {
  return (
    <MainLayout>
      <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/project/:id" element={ <ProjectPage /> } />
          <Route path="/contact" element={ <ContactPage /> } />
          <Route path="/*" element={ <Navigate to='/' />} />
      </Routes>
    </MainLayout>
  )
}
