
import './App.css'
import PokeAPI from './components/poke'
import DbzAPI from './components/dbz'
import Filme from './components/Filme'
import SearchMovie from './components/BuscaFilme'

function App() {


  return(
    <>
      <PokeAPI/>
      <DbzAPI/>
      <Filme/>
      <SearchMovie/>

    </>
  )
}

export default App
