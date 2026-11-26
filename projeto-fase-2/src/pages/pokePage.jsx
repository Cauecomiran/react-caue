
import PokeAPI from "../components/poke"
import NavigateButton from "../components/navigatebutton"
import PokeRandomAPI from "../components/PokemonRandom"

export default function PokePage(){

    return(<>
        <div id="center">

                <NavigateButton caminho="/filme" nome="Filmes"/>
                <NavigateButton caminho="/dbz" nome=" Dragon Ball Z"/>
            <div className="poke-page">
                <PokeAPI/>
                <PokeRandomAPI/>

            </div>
        </div>
    </>)



}