const { Router } = require('express');
const router = Router();
/* Controllers */
const {getAllPoke} = require('../controllers/getAllPoke');
const {getPokeById} = require('../controllers/getPokeById');
const { getPokeByName } = require('../controllers/getPokeByName');
const { postPokemon } = require('../controllers/postPokemon');
const { getTypes } = require('../controllers/getTypes');
const { deleteMyPoke } = require('../controllers/deleteMyPoke');
const { updateMyPoke } = require('../controllers/updatePoke');

/* Routers */
router.get('/pokemons', getAllPoke);
router.get('/types', getTypes);
router.get('/pokemons/name', getPokeByName);
router.get('/pokemons/:id', getPokeById);
router.post('/pokemons', postPokemon);
router.put('/pokemons/:id', updateMyPoke);
router.delete('/pokemons/:id', deleteMyPoke);


module.exports = router;
