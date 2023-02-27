import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Sam from './Creators/Sam/Sam'

function App() {

  return (
    <div className="App">
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/sam" element={<Sam/>}/>
 </Routes>
    </div>
  )
}

export default App
