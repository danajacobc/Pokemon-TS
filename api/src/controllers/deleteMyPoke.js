const {Pokemon} = require('../db')

const deleteMyPoke = async (req, res) => {
    try {
        const {id} = req.params;

        await Pokemon.destroy({where: {id: id}})

        return res.status(200).json(Pokemon);
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

module.exports = {deleteMyPoke};