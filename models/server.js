// const e = require("express");
const express = require("express");

class Server {
  constructor() {
    //sirve para iniciar las propiedades del servidor
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.get("/api0", (req, res) => {
      res.json({
        ok: true,
        msg: "get API",
      });
    });

    this.app.put("/api0", (req, res) => {
      res.status(400).json({
        ok: true,
        msg: "put API",
      });
    });

    this.app.post("/api0", (req, res) => {
      res.status(201).json({
        ok: true,
        msg: "post API",
      });
    });

    this.app.delete("/api0", (req, res) => {
      res.json({
        ok: true,
        msg: "delete API",
      });
    });

    this.app.patch("/api0", (req, res) => {
      res.json({
        ok: true,
        msg: "patch API",
      });
    });

    //end point ejemplo text
    this.app.get("/api", (req, res) => {
      res.send("Hello World text");
    });

    //end point ejemplo json
    this.app.get("/api1", (req, res) => {
      res.status(200).json({
        ok: true,
        msg: "get API1",
      });
    });

    //end point ejemplo json
    this.app.put("/api2", (req, res) => {
      res.json({
        ok: true,
        msg: "put API2",
      });
    });

    //end point ejemplo json actualizar dos
    this.app.put("/api2", (req, res) => {
      res.status(200).json({
        ok: true,
        msg: "get API2",
      });
    });

    //end point ejemplo json insertar
    this.app.post("/api2", (req, res) => {
      res.status(201).json({
        ok: true,
        msg: "post API2",
      });
    });

    //end point ejemplo json eliminar
    this.app.delete("/api2", (req, res) => {
      res.status(201).json({
        ok: true,
        msg: "Delete API2",
      });
    });

    //end point ejemplo json sustituir
    this.app.patch("/api2", (req, res) => {
      res.status(201).json({
        ok: true,
        msg: "Patch API2",
      });
    });

    //end point 403 no aurorizado
    this.app.get("/api3", (req, res) => {
      res.status(403).json({
        ok: true,
        msg: "get API3",
      });
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;