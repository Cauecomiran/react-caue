import { Link } from "react-router-dom";

export default function NavigateButton({caminho,nome}){

    return(
        <Link to={caminho}>
            {nome}
        </Link>
    )
}