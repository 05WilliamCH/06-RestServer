const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config710');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api0/usuarios';

        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    //Base de datos
    async conectarDB(){
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());

        this.app.use( express.json());

        this.app.use(express.static('public'));
    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/usuarios710.routes'));
        //Para que funcion visitar http://localhost:8080/api/usuarios
        //Probar get, post, put, delete
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }

}

module.exports = Server;