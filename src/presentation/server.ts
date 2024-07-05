import express, { Router } from "express";

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(option: Options) {
    const { port = 4000, routes } = option;

    this.port = port;
    this.routes=routes
  }

  async start() {

    //ejecutar los midleware
    this.app.use(express.json())
    

    //usamos o inicialisamos las rutas
    this.app.use(this.routes);



    //inicialisamos el server
    this.app.listen(this.port , () => {
      console.log(`Server runing on port ${this.port}`);
    });
  }
}
