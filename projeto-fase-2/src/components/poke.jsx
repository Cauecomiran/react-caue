import { useState, useEffect } from "react";
import axios from "axios";
import useBusca from "../hooks/useBusca";

export default function PokeAPI(){

    const {req, loading, erro} = useBusca("https://pokeapi.co/api/v2/pokemon/8", "")


    if(loading){
        return(<p>Carregando...</p>)
    }

    return(
        <div>
            <h2>
                Meu PIKOMON
            </h2>

            <h3>
                {req.name}
            </h3>

            <img src={req.sprites.other["official-artwork"].front_default}
            className="poke" 
            width="170" 
            height="179"  
            alt="img" />

            <p>
                Tipo: {req.types.map((type, index) => (
                    <span key={type.type.name}>
                        {index > 0 && " | "}
                        {type.type.name}
                    </span>
                ))}
            </p>

            <p>
                Numero da PokeDex #{req.id}
            </p>
        </div>
    )


}