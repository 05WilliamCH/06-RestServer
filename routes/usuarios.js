const { Router} = require('express');
const { UsuariosGet,
        UsuariosPost,
        UsuariosPut,
        UsuariosPatch,
        UsuariosDelete } = require('../controllers/usuarios');

const router = Router();

    router.get('/', UsuariosGet );

    router.put('/:id', UsuariosPut );

    router.post('/', UsuariosPost );

    router.delete('/', UsuariosDelete );

    router.patch('/', UsuariosPatch);

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