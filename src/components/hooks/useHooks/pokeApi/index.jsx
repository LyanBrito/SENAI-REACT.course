import { useEffect, useState } from "react";

export default function PokeApi() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
    //   status
      .then((data) => {
    // dados
        setPokemons(data.results)
    // vai trazer só os itens do array de pokemons
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      });

    // res - response - resposta
    // .json -> geralmente é um arquivo de api
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>deu erro {error}</p>;
  }
return <>
  <h1>lista de pokemons</h1>
  <ul>
    {
        pokemons.map((pokemon, index) => 
            <>
            <li key={index}>{pokemon.name}</li>
            <li key={index}>{pokemon.url}</li>
            </>
// li*10, o map vai multiplicar o index pelo valor setado(10) e vai tarzer 10 itens
        )
    }
  </ul>
  </>;
}
