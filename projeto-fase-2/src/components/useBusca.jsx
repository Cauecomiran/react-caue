import { useState, useEffect } from "react";
import axios from "axios";

export default function useBusca(url, name, apiKey ){
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
                console.error('Erro na raquisição', error)
            } finally {
                setLoading(false)
            }
        }

        getReq()
    },[])

    return{req, loading, erro}


}