const { Router} = require('express');
const Role = require('../models/role711'); //Trabaja con el modelo role de la bd
const { check } = require('express-validator');
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    UsuaruosDelete } = require('../controllers/usuarios711.controllers');
    const { validarCampos } = require('../middlewares/validar-campos711');

const router = Router();

    router.get('/', usuariosGet );

    router.put('/:id', usuariosPut );

    router.post('/',[
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio y mas de 6 letras').isLength({min: 6}),
        check('correo', 'El correo no es valido').isEmail,
        //check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom( async(rol = '') => {
            const existeRol = await Role.findOne({ rol });
            if(!existeRol){
                throw new Error(`El rol ${rol} no esta registrado en la BD`)
            }
        }),
        validarCampos
    ] ,usuariosPost );
    

    router.delete('/', UsuaruosDelete );

    router.patch('/', usuariosPatch );

    

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