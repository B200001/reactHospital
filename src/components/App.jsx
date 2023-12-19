import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormOne from './FormOne'
import Home from './Home'
import FormTwo from './FormTwo'
import Entry from './Entry'
import Preview from './Preview'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/formOne/:userId' element={<FormOne/>}/>
            <Route path='/formTwo/:userId' element={<FormTwo/>}/>
            <Route path="/newEntry/:userId" element={<Entry />} />
            <Route path='/preview' element={<Preview/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App