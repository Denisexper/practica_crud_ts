import { Router } from "express";
import { Request, Response } from "express";
import { ShoesControllerService } from "../controllers/Shoes.controller.service";

export class ShoesRoutes {

    private controller : ShoesControllerService
    private router : Router

    constructor(
        
        controller : ShoesControllerService,
        router : Router
    ) {

        this.controller = controller,
        this.router = router
    }

    initRoutes () {

        try {

            this.router.get("/shoes", (req: Request, res: Response) => this.controller.getAll(req, res)),
            this.router.get("/shoe/:id", (req: Request, res: Response) => this.controller.getById(req, res)),
            this.router.post("/shoe", (req: Request, res: Response) => this.controller.create(req, res)),
            this.router.put("/shoe", (req: Request, res: Response) => this.controller.update(req, res)),
            this.router.delete("/shoe", (req: Request, res: Response) => this.controller.deleteShoe(req, res))

            return this.router
            
        } catch (error) {
            
            throw new Error(error as string)
        }
    }
}


