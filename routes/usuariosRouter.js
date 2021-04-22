const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const ValidarCadastro = require('../middlewares/ValidarCadastro');

router.get('/', usuariosController.index);
// http://localhost:3000/usuarios/

router.get('/registro', usuariosController.registro);
// http://localhost:3000/usuarios/registro

router.get('/login', usuariosController.login);
// http://localhost:3000/usuarios/login

router.post('/', ValidarCadastro, usuariosController.create);
// http://localhost:3000/usuarios/

router.put('/:id', usuariosController.update);
// http://localhost:3000/usuarios/1

router.delete('/:id', usuariosController.delete);
// http://localhost:3000/usuarios/1

// http://localhost:3000/usuarios/perfil/1


module.exports = router;
