const getAllPokemons = require('./endpoint.js').getAllPokemons;
const getPokemonImg = require('./endpoint.js').getPokemonImg;


// get the data from the endpoint
const getData = async () => await getAllPokemons();
const getPokemonImgURL = async (url) => await getPokemonImg(url);

getData().then((data) => {
    let pokemonsArray = data.results.map( async (pokemon) => {
        let pokemonImageUrl = await getPokemonImgURL(pokemon.url);
        return {
            name: pokemon.name,
            imgUrl: pokemonImageUrl,
        };
    })
    return pokemonsArray;
}).then((pokemonsArray) => {
    Promise.all(pokemonsArray).then((pokemons) => {
        console.log(pokemons);
    });
}).catch((err) => {
    console.error('err', err);
});
