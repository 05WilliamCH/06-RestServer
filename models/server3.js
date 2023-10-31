const express = require('express')
const cors = require('cors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        
        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes(){

        this.app.get('/api0', (req,res) => {
            res.json({
                ok:true,
                msg: 'get API'
            })
        });

        this.app.put('/api0', (req,res) => {
            res.status(400).json({
                ok: true,
                msg: 'put API'
            })
        });

        this.app.post('/api0', (req,res) => {
            res.status(201).json({
                ok: true,
                msg: 'post API2'
            })
        });

        this.app.delete('/api0', (req,res) => {
            res.json({
                ok: true,
                msg: 'delete API2'
            })
        });

        
        this.app.patch('/api0', (req,res) => {
            res.json({
                ok: true,
                msg: 'patch API2'
            })
        });

        this.app.get('/api', (req,res) => {
            res.send('Hello Worl Text')
        });

        this.app.get('/api2', (req,res) => {
            res.json({
                ok: true,
                msg: 'get API2'
            })
        });

        this.app.get('/api3', (req,res) => {
            res.status(403).json({
                ok: true,
                msg: 'get API3'
            })
        });
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto',this.port);
        });
    }
    
}


module.exports = Server;