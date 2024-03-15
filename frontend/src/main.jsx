import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { DashboardProvider } from './Pages/Dashboard/DashboardContext.jsx'

ReactDOM.render(
    <DashboardProvider>
        <App />
    </DashboardProvider>
    , document.getElementById('root'))
