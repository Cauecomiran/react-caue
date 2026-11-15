
import './App.css'
import PokeAPI from './components/poke'
import DbzAPI from './components/dbz'
import Filme from './components/Filme'
import PokeRandomAPI from './components/PokemonRandom'
import BuscarFilme from './components/BuscaFilme'


function App() {


  return(
    <div>
      
      <div className='filme-container'>
        <BuscarFilme/>
        <Filme/>
      </div>


      <DbzAPI/>
      
      <PokeAPI/>
      <PokeRandomAPI/>
    


    
      

    </div>
  )
}

export default App