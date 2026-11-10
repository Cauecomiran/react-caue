import { useState } from 'react'
import './App.css'
import axios from 'axios'

import PokeAPI from './components/poke'
import DbzAPI from './components/dbz'
function App() {


  return(
    <>
      <PokeAPI/>
      <DbzAPI/>
    </>
  )
}

export default App
