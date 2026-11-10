import { useState,useEffect } from "react";
import axios from "axios";

export default function DbzAPI(){

    const [dbz, setDbz] = useState(null)

    useEffect(() =>{
        const getData = async() =>{

            try{
                const respDBZ = await axios.get
                ("https://dragonball-api.com/api/characters/1")
                setDbz(respDBZ.data)
            }catch(e){
                console.error("Erro ao busca personagem:", e)
            }
        }


        getData();
    },[])

    if(!dbz){
        return(
            <>
                Carregando...
            </>
        )
    }

    return(
        <>

            <h2>
                Nome: {dbz.name}
            </h2>

            <img src={dbz.image} 
            className="dbz"
            width='140'/>

            <p>
                Raça: {dbz.race}
            </p>
            
        </>
    )




}