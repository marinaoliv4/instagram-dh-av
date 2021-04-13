const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        let usuarios =  await Usuario.findAll();
        
        return response.json(usuarios);
    }
}

module.exports = usuariosController;