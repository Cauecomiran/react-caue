import { useState } from "react";
import axios from "axios";
import useBusca from "../hooks/useBusca";

export default function Filme(){
    const key = "2268ba67"
    const {req, loading, erro} = useBusca(`https://www.omdbapi.com/?i=tt3896198&apikey=${key}`, "")

    if(loading){
        return(
            <>
                Carregando...
            </>
        )
    }

    return(
        <div className="filme">
            <h2>
                Meu filme:
            </h2>

            <h3>
                {req.Title}
            </h3>

            <img src={req.Poster}
            alt=""
            className="filme-poster"
            width="170" />

            <p>Ano: {req.Year}</p>
            <p>Genero: {req.Genre}</p>
            <p>Nota IMDB: {req.imdbRating}</p>
            <p>
                Premios: {req.Awards}
            </p>
        </div>
    )


}