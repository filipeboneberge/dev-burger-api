import express from "express";
import routes from "./routes.js";

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

export default new App().app;
