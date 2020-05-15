import React from 'react'
import { Router } from "@reach/router"
import HomePage from './pages/HomePage'
import VideoCallPage from './pages/VideoCallPage'

import './App.css'
import 'bulma/css/bulma.css'


const App = () => {

  return (
    <Router>
      <HomePage path="/"/>
      <VideoCallPage path="/videollamada"/>
    </Router>
  )
}

export default App