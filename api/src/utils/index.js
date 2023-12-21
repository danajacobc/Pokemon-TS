//Funciones para mis controllers.

//Función en la que recorremos el array de pokemons para devolverlo.
const formatPokemonApi = (pokemonArray) => {
    const allPoke = pokemonArray.map((response) => { 
        const data = response.data;
        const pokeData = formatSinglePoke(data); //le doy el formato a mis pokes

        return pokeData;
    });

    return allPoke;
}

//Función para generar el formato de cada pokemon.
const formatSinglePoke = (data) => {
    const pokeData = {
        id: data.id,
        name: data.name,
        image: data.sprites?.other?.home?.front_default,
        imageShiny: data.sprites?.other?.home?.front_shiny,
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: data.height,
        weight: data.weight,
        types: data.types?.map((type) => type.type.name),
        isFromAPI: true,
    };

    data.stats.forEach((stat) => {
        switch (stat.stat.name) {
            case 'hp':
                pokeData.hp = stat.base_stat;
                break;
            case 'attack':
                pokeData.attack = stat.base_stat;
                break;
            case 'defense':
                pokeData.defense = stat.base_stat;
                break;
            case 'speed':
                pokeData.speed = stat.base_stat;
                break;
            default:
                break;
        }
    }); 
    return pokeData;
}

//Función para crear mi propio Poke.
const formatMyPoke = (data) => {
    
    const myPoke = {
        id: data.id,
        name: data.name,
        image: data.image,
        imageShiny: data.imageShiny,
        hp: data.hp,
        attack: data.attack,
        defense: data.defense,
        speed: data.speed,
        height: data.height,
        weight: data.weight,
        types: data.types.map(({name}) => name), //.map((type) => type.dataValues?.name),
        isFromAPI: data.isFromAPI,
    };
   
    return myPoke;
}

module.exports = {
    formatPokemonApi,
    formatSinglePoke,
    formatMyPoke
}
