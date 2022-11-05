const axios = require('axios');
const url = 'https://pokeapi.co/api/v2/pokemon/';

const getAllPokemons = async () => {
  const response = await axios.get(url);
  return response.data;
}

const getPokemonImg = async (url) => {
  const response = await axios.get(url);
  return response.data.sprites.front_default;
};

module.exports = { getAllPokemons, getPokemonImg };