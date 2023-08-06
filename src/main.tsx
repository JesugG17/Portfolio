import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

import './index.css'

import { IS_DEVELOPMENT } from './constants/isDevelopment'

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
  // <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  // </React.StrictMode>
)
