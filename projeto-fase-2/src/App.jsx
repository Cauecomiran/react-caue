import {Routes, Route, BrowserRouter} from "react-router-dom"



import './App.css'
import FilmesPage from "./pages/filmesPage"
import PokePage from "./pages/pokePage"
import DbzPage from "./pages/dbzPage"


function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokePage/>}/>
          <Route path="/filme" element={<FilmesPage/>}/>
          <Route path="/dbz" element={<DbzPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App