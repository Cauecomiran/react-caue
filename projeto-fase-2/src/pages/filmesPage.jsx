import BuscarFilme from "../components/BuscaFilme";
import Filme from "../components/Filme";
import NavigateButton from "../components/navigatebutton";



export default function FilmesPage(){


    return(
        <section>
            <div>
                <div className="navegacao">
                    <NavigateButton caminho="/dbz" nome="Dragon Ball Z"/>
                    <NavigateButton caminho="/" nome="PIKOMON"/>
                </div>

                <h1>
                    Filmes!
                </h1>

                <Filme/>
                <BuscarFilme/>

            </div>
        </section>
    )
}