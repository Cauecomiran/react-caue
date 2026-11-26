import { useState, useEffect } from "react";
import axios from "axios";

export default function useBusca(url, name ){
    const [req, setReq] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState("")
    
    

    useEffect(() => {
        // pegar requisição
        const getReq = async() => {  
            try{
                const resp = await axios.get(`${url}${name}`)
                setReq(resp.data) 
            }catch(error){
                setErro(error)
                console.error('Erro na requisição', error)
            } finally {
                setLoading(false)
            }
        }

        getReq()
    },[req])

    return{req, loading, erro,}
}