const { response, request } = require('express');

const Usuario = require('../models/usuario');

const UsuariosGet = (req = request,res = response) => {

    const {q, nombre = 'No name', apikey } = req.query;

    res.json( {

        ok: true,
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })
}

//En el app6 se agrega const{nombre, edad}
const UsuariosPost = (req,res = response) => {
    
    const {nombre, edad, universidad} = req.body

    res.json({

        msg: 'post API - Controlador',
        nombre,
        edad,
        universidad

    });

}

//en el app6 se agrego id
const UsuariosPut = (req,res = response) => {

    const {id} = req.params;

    res.json({
        ok: true,
        msg: 'put API - Controlador',
        id
    })
}

const UsuariosPatch = (req,res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - Controlador'
    })
}

const UsuariosDelete = (req,res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - Controlador'
    })
}

module.exports = {

    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosPatch,
    UsuariosDelete,
    
}