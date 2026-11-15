import useBusca from "../hooks/useBusca"

export default function BuscaAPI(){
    
    const{req, loading, erro} = useBusca("https://pokeapi.co/api/v2/pokemon/", "arcanine")

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
        <>
            Nome: {req.name}
            <img src={req.sprites.other["official-artwork"].front_default}
            className="poke"
            width='180'
            alt="" />
        </>
    )

}