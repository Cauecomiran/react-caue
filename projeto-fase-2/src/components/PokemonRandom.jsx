import useBusca from "../hooks/useBusca"
import { useState } from "react"
import PokeCard from "./PokeCard"

export default function PokeRandomAPI(){


    const [id, setId] = useState(1)
    const{req, loading, erro} = useBusca(`https://pokeapi.co/api/v2/pokemon/${id}`, "")

   if(loading == true){
        return(
            <>
                Carregando PIKOMON
            </>
        )
    }

    if(erro){
        return(
            <>Erro ao buscar Pikomon: Erro{erro}</>
        )
    }
    
    return(
        <div className="pokemonRandom">
            <button onClick={()=> setId( Math.ceil(Math.random()* 1025))}>Randomizar PIKOMON</button>

            <div>
                Nome: {req.name}
                <img src={req.sprites.front_default}
                className="poke"
                width='180'
                alt="" />
            </div>

            <PokeCard req = { req }/>
        </div>

    )

}