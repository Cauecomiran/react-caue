import DbzAPI from "../components/dbz";
import NavigateButton from "../components/navigatebutton";

import Person from "../components/person";

export default function DbzPage(){

    return(
        <div className="dbz-page">

            <NavigateButton caminho="/filme" nome="Filmes"/>
            <NavigateButton caminho="/" nome="/Pikomon"/>

            <div>
                <Person/>
                <DbzAPI/>
            </div>

        </div>
    )
}