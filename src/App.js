import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import TextField from './components/TextField'
import Home from './components/Home'
import '../src/App.css'
import '../src/bootstrap.css'
function App () {
  const [text, setText] = useState('')
  const [mode, setMode] = useState('light')
  const style = {
    backgroundColor: mode === 'light' ? 'white' : '#061138',
    color: mode === 'light' ? 'black' : 'white'
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title='TextUtils' mode={mode} setMode={setMode} />
        <Routes>
          <Route
            path='/manipulate'
            element={
              <TextField
                text={text}
                setText={setText}
                mode={mode}
                style={style}
              />
            }
          />
          <Route path='/docs' element={<About style={style} mode={mode} />} />
          <Route
            path='/'
            element={<Home mode={mode} style={style} setMode={setMode} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
