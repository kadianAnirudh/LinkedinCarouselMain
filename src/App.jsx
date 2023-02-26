import { useState } from 'react'
import AIVet from './AIVet'
import './App.css'
import Form from './Form'
import HeroPanel from './HeroPanel'
import Team from './Team'

function App() {

  return (
    <div className="App">
 <HeroPanel/>
 <AIVet/>
 <Team/>
 {/* <Form/> */}
    </div>
  )
}

export default App
