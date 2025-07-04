import express, { Router, json } from "express"
import { Enviroments } from "./utils/Enviroments.service"
import { connect } from "mongoose"
import { ProductsRepositoryService } from "./repositories/ProductsRepository"
import { ModelProducts } from "./models/Products"
import { ProductsControllerService } from "./controllers/Procuts.controllers.service"
import { ProductsRoutes } from "./routes/Product.routes"
import cors from "cors"

class server {

    private server : typeof express.application
    private port : typeof Enviroments.PORT

    constructor(
        server : typeof express.application,
        port : typeof Enviroments.PORT
    ){
        this.server = server,
        this.port = port
    }

    async mongoService () {

        try {
            
            await connect(Enviroments.MONGO)
            console.log("mongoo connected")

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    }

    initServices () {

        const repository = new ProductsRepositoryService(ModelProducts)

        const controller = new ProductsControllerService(repository)

        const routes = new ProductsRoutes(controller, Router())

        this.server.use(cors())
        this.server.use(json())

        this.server.use("/api", routes.initRoutes())


    }

    initServer () {

        try {
            
            this.server.listen(this.port, () => {

                console.log("server running")
            })
        } catch (error) {
            
            throw new Error(`${error}`)
        }
    }

}

const Server = new server(express(), Enviroments.PORT)
Server.initServer()
Server.initServices()
Server.mongoService()