import { Router } from "express";
import { ProductsControllerService } from "../controllers/Procuts.controllers.service";
import { Request, Response } from "express";

export class ProductsRoutes {

    private controller : ProductsControllerService
    private router : Router

    constructor (controller: ProductsControllerService, router : Router) {
        this.controller = controller,
        this.router = router
    }

    initRoutes () {

        this.router.post("/create-p", (req: Request, res: Response) => this.controller.create(req, res))
        this.router.get("/gets-p", (req: Request, res: Response) => this.controller.getAll(req, res))
        this.router.get("/get-p/:id", (req: Request, res: Response) => this.controller.getbyId(req, res))
        this.router.put("/update-p/:id", (req: Request, res: Response) => this.controller.updata(req, res))
        this.router.delete("/delete-p/:id", (req: Request, res: Response) => this.controller.delete(req, res))

        return this.router
    }
}