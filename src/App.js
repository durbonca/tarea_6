import { useEffect, useState } from 'react';
import { getAllPokemons, getPokemonImg } from './api/endpoint.js';
import { Pokemono } from './Pokemono';

export const App = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const getPokemonsList = async () => {
        const getData = async () => await getAllPokemons();
        const getPokemonImgURL = async (url) => await getPokemonImg(url);
        await getData().then((data) => {
            let pokemonsArray = data.results.map( async (pokemon, i) => {
                let pokemonImageUrl = await getPokemonImgURL(pokemon.url);
                return {
                    id: `pokemon_${i+1}`,
                    name: pokemon.name,
                    imgUrl: pokemonImageUrl,
                };
            })
            return pokemonsArray;
        }).then((pokemonsArray) => {
            Promise.all(pokemonsArray).then((pokemons) => {
                setPokemonList(pokemons);
            });
        }).catch((err) => {
            console.error('err', err);
        })
    }

    useEffect(() => {
        getPokemonsList();
    }, []);

  return (
    <div>
        <h1 className="mt-4 text-center text-3xl font-bold underline">Pokemonos</h1>
        <div 
            className="m-4 p-6 rounded-lg border-solid border-8 border-zinc-900 flex flex-wrap justify-center gap-4 bg-red-400"
        >
            {pokemonList?.map((pokemon) => (
                <Pokemono key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    </div>
  )
}