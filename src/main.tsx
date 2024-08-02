import React from 'react'
import ReactDOM from 'react-dom/client'
import "#styles/global.css"
import AppRouter from '#routes/AppRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
