import { useState, useEffect } from "react";
import axios from "axios";

export default function PokeAPI(){

    const [poke, setPoke] = useState(null)

    useEffect(() => {
        const getData = async() => {  
            try{
                const respPoke = await axios.get("https://pokeapi.co/api/v2/pokemon/mawile")
                setPoke(respPoke.data)
            }catch(error){
                console.error('Erro ao buscar PIKOMON: erro', error)
            }    
        }

        getData()
    },[])


    if(!poke){
        return(<p>Carregando...</p>)
    }

    return(
        <div>
            <h2>
                meu PIKOMON
            </h2>

            <h3>
                {poke.name}
            </h3>

            <img src={poke.sprites.other["official-artwork"].front_default}
            className="poke" 
            width="170" 
            height="179"  
            alt="img" />

            <p>
                Tipo: {poke.types[0].type.name} | Tipo 2: {poke.types[1].type.name}
            </p>

            <p>
                Numero da PokeDex #{poke.id}
            </p>
        </div>
    )


}