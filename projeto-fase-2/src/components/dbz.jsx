import { useState,useEffect } from "react";
import axios from "axios";
import useBusca from "../hooks/useBusca";

export default function DbzAPI(){

    

    const {req, loading, erro} = useBusca("https://dragonball-api.com/api/characters/65", "" )

    if(loading){
        <>carregando....</>
    }

    if(erro){
        console.log("Erro ao buscar dbz: erro", erro)
    }

    return(
        <div>

            <h2>
                Nome: {req.name}
            </h2>

            <img src={req.image} 
            className="dbz"
            width='140'/>

            <p>
                Raça: {req.race}
            </p>
            
        </div>
    )




}