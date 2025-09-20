import { useState } from 'react'
import { Router } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Issues from './pages/Issues'


function App() {
 

  return (
   <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/repo/:owner/:repo" element={<Issues/>}/>
   </Routes>
  )
}

export default App
