const { formatMyPoke } = require("../utils");
const {Pokemon, Type} = require("../db");


const postPokemon = async (req, res) => {
    const URL = "https://who-is-that-pokemon-door.netlify.app/img/qssp.aa4be5dd.png" //imagen por defecto.
try {
    const {name, image, imageShiny, hp, attack, defense, speed, height, weight, types} = req.body; //types: [{name:fuego}, {agua}, {aire}]

    if(!name || !hp || !attack || !defense || !types || types.length < 2) return res.status(401).json({message: 'Faltan datos necesarios para crear el Pokemon.'})

    const datos = {name, image: image || URL, imageShiny, hp, attack, defense, speed, height, weight}  
    const newPoke = await Pokemon.create(datos);

    const type = await Type.findAll({where: {name: types}});
    await newPoke.addTypes(type); //crea la relación entre ambas tablas.

    const newPokeWithTypes = {...newPoke.dataValues, types}

    return res.status(200).json(newPokeWithTypes);

} catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
}
};

module.exports = {
    postPokemon,
}