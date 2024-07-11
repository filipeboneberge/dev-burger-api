const express = require("express");
const routes = require("./routes.js");

class App {
  constructor() {
    this.app = express();

    this.midleware();
    this.routes();
  }

  midleware() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
