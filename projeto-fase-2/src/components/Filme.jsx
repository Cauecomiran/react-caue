import { useState, useEffect } from "react";
import axios from "axios";

export default function Filme(){

    const [filme, setFilme] = useState(null)

    useEffect(() =>{
        const getData = async() => {
            try{
                const res = await axios.get
                ("https://www.omdbapi.com/?i=tt3896198&apikey=2268ba67")

                setFilme(res.data)
            }catch(erro){
                console.error("Erro ao buscar Filme: ", erro)
            }
        }

        getData();    
    },[])

    if(!filme){
        return(
            <>
                Carregando...
            </>
        )
    }

    return(
        <>
            <h2>
                Meu filme:
            </h2>

            <h3>
                {filme.Title}
            </h3>

            <img src={filme.Poster}
            alt=""
            className="filme"
            width="170" />

            <p>Ano: {filme.Year}</p>
            <p>Genero: {filme.Genre}</p>
            <p>Nota IMDB: {filme.imdbRating}</p>
            <p>
                Premios: {filme.Awards}
            </p>
        </>
    )


}