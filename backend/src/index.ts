import express, { Router, json } from "express"
import { Enviroments } from "./utils/Enviroments.service"
import { connect } from "mongoose"
import { ProductsRepositoryService } from "./repositories/ProductsRepository"
import { ModelProducts } from "./models/Products"
import { ProductsControllerService } from "./controllers/Procuts.controllers.service"
import { ProductsRoutes } from "./routes/Product.routes"
import cors from "cors"
import { ShoesRepository } from "./repositories/ShoeRepository"
import { ModelShoes } from "./models/Model.Shoes"
import { ShoesControllerService } from "./controllers/Shoes.controller.service"
import { ShoesRoutes } from "./routes/Shoes.routes"

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

        //shoes services
        const shoesRepo = new ShoesRepository(ModelShoes)

        const shoesContro = new ShoesControllerService(shoesRepo)

        const shoesRouter = new ShoesRoutes(shoesContro, Router())

        this.server.use(cors())
        this.server.use(json())

        this.server.use("/api", routes.initRoutes())

        //shoes services
        this.server.use("/api", shoesRouter.initRoutes())


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