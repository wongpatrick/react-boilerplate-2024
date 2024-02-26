import { useState, useEffect } from "react"
import axios from "axios"

export default function Pokemon() {
    const [pokemonList, setPokemonList] = useState([])
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error)
            }
        }

        fetchPokemon();
    }, [])

    return (
        <div>
            <h1>Pokedex</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name}>
                        {pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}