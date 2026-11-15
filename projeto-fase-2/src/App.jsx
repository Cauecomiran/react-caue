
import './App.css'
import PokeAPI from './components/poke'
import DbzAPI from './components/dbz'
import Filme from './components/Filme'
import BuscaAPI from './components/busca'
import BuscarFilme from './components/BuscaFilme'


function App() {


  return(
    <>
      <BuscarFilme/>
      <DbzAPI/>
      <Filme/>
      <PokeAPI/>
      <BuscaAPI/>


    
      

    </>
  )
}

export default App