const {Pokemon} = require('../db');

const updateMyPoke = async (req, res) => {
    try {
        const {id} = req.params;
        const update = req.body;
        
        const [datasUpdate] = await Pokemon.update( update , { where: {id: id} }); //[destructuro] para que me devuelva la cantidad de filas actuales.

        if(datasUpdate === 0) return res.status(200).json({ message: "El Pokemon no se ha encontrado!"});

        const pokeUpdate = await Pokemon.findOne({ where: { id: id } });
        return res.status(200).json({ message: "Pokemon actualizado!", pokeUpdate });

      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
}

module.exports = { updateMyPoke }