import useBusca from "../hooks/useBusca"

export default function Person() {
  const { req, loading, erro } = useBusca("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person", "")

  if (loading) {
    return <p>Carregando pessoa...</p>
  }

  return (
        <div id="docs">



            {loading && <>Carregando...</>}
            {erro && console.log(erro)}
            <h1>{req[15].nome}</h1>
        </div>
    )}