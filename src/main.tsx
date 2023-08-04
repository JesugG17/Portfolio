import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage'
import { IS_DEVELOPMENT } from './utils/isDevelopment'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

const Router = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {
        IS_DEVELOPMENT
        ? (
          <BrowserRouter>
            { children }
          </BrowserRouter>
        )
        : (
          <HashRouter>
            { children }
          </HashRouter>
        )
      }
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>
)
