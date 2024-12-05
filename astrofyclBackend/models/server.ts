import express, { Express } from "express";
import { dbConnection } from "../database/config";
import authRoutes from "../routes/authRoutes"

export class Server {
  app: Express;
  port: string | number | undefined;
  authPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "auth";

    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  async conectarDB(): Promise<void> {
    await dbConnection();
  }

  middlewares():void{
    this.app.use(express.json())
  }

  routes():void {
    this.app.use("/auth", authRoutes)
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto: ", this.port);
    });
  }
}
