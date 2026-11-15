
import { useState, useEffect } from "react";
import useBusca from "../hooks/useBusca";

export default function BuscarFilme(){
    const [nomeFilme, setNomeFilme] = useState("")
    const [nome, setNome] = useState("")
    
    const key = "2268ba67"
    const {req, loading, erro} = useBusca(`https://www.omdbapi.com/?s=${nomeFilme}&apikey=${key}`, "")
    const resposta = req?.Search || [];

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if (nome.trim() !== '') {
            setNomeFilme(nome)
          }else{
            setNomeFilme([])
          }
        }, 800)

        return () => clearTimeout(delayDebounceFn)
        }, [nome])

    return(
        <div>
            <h2>
                Pesquise seu filme:
            </h2>
           <input type="text"
           placeholder="Digite um filme..."
           className="buscarFilme"
           value={nome}
           onChange={(e) => setNome(e.target.value)}
           /> 

            {loading && <>Carregando...</>}
            {erro && <>Erro ao buscar...</>}
        
        <ul>
            {resposta.map((res) => (
                <li key={res.imdbID} className="list">
                <strong>{res.Title}</strong> ({res.Year})
                </li>
            ))}
        </ul>
        </div>
    )
}