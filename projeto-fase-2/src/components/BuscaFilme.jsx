import { useState, useEffect } from "react";
import axios from "axios"

export default function BuscarFilme(){

    const [buscaFilmes, setBuscaFilme] = useState([])
    const [loading, setLoading] = useState(false)
    const [busca, setBusca] = useState("")
    const key = '2268ba67'

    useEffect(() => {

        const getData = async() => {

            setLoading(true)
            try{
                const respBusca = await axios.get(`https://www.omdbapi.com/?s=${busca}&apikey=${key}`)
                const data = respBusca.data

                if(data.Response === 'True'){
                    setBuscaFilme(data.Search)
                }else{
                    setBuscaFilme([])
                }
            }catch(e){
                console.error('Erro ao buscar filmes: erro', e)
            }finally{
                setLoading(false)
            }

        }

        const  delayBusca = setTimeout(()=>{

            if(busca.trim() !== ""){
                getData()
            }else{
                setBuscaFilme([])
            }

        }, 800)
        return() => clearTimeout(delayBusca)
    },[busca])

    return(
        <div>
           <input type="text"
           placeholder="Digite um filme..."
           className="buscarFilme"
           value={busca}
           onChange={(e) => setBusca(e.target.value)}
           /> 

            {loading && <p>Carregando...</p>}

            <ul>
                {buscaFilmes.map((buscaFilme)=>(
                    <li key={buscaFilme.imdbID} className="lista">
                        <strong>
                            {buscaFilme.Title} || ({buscaFilme.Year})
                        </strong>
                    </li>
                ))}
            </ul>
        </div>
    )


}