import express from "express";
import cors from "cors";
import ApiRoutes from "../routes/routes.js"
import swaggerUI from "swagger-ui-express";
import swaggerDocument from '../swagger/swagger.json' assert {type: "json"}



class Server{

    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.middlewares();

        

        this.routes();
    }

    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor ejecutandose en el puerto ${this.port}`);
        })
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use("/api/", ApiRoutes)
        this.app.use("/api-doc/", swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    }
}

export default Server;