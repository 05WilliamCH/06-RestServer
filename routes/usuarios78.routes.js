const { Router} = require('express');
const {   usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    UsuaruosDelete, } = require('../controllers/usuarios78.controllers');

const router = Router();

    router.get('/', usuariosGet );

    router.put('/:id', usuariosPut );

    router.post('/', usuariosPost );

    router.delete('/', UsuaruosDelete );

    router.patch('/', usuariosPatch);

    

    router.get('/api', (req,res) => {
        res.send('Hello worl Text')
    });

    router.get('/api2', (req,res) => {
        res.json({
            ok: true,
            msg: 'get API2'
        })
    });

    router.get('/api3', (req,res) => {
        res.status(403).json({
            ok: true,
            msg: 'get API3'
        })
    });

    module.exports = router;