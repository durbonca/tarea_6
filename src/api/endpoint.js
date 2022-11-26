import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const getAllPokemons = async () => {
  const response = await axios.get(url);
  return response.data;
}

export const getPokemonImg = async (url) => {
  const response = await axios.get(url);
  return response.data.sprites.front_default;
};