import { Request, Response } from "express"
import { ProductsRepositoryService } from "../repositories/ProductsRepository"
import { ProductRepository } from "../interfaces/ProductosRepository"

export class ProductsControllerService {

    private repository : ProductRepository

    constructor( repository : ProductRepository){
        this.repository = repository
    }

    async create (req: Request, res: Response) {

        try {
            
            const product = await this.repository.create(req.body)

            res.status(200).json({
                msj: "Product creado sucessfully",
                data: product
            })

        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })
        }
    }

    async getAll (req: Request, res: Response){

        try {
            
            const products = await this.repository.getAll()

            res.status(200).json({
                msj: "products gets sucessfullly",
                data: products
            })

        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })
        }
    }

    async getbyId (req: Request, res: Response){

        try {
            
            const { id } = req.params

            const product = await this.repository.getById(id)

            res.status(200).json({
                msj: "product get it sucessfully",
                data: product
            })

        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })
        }
    }

    async updata (req: Request, res: Response){

        try {
            
            const { id } = req.params

            const productUpdate = await this.repository.update(id, req.body)

            res.status(200).json({
                msj: "product updated",
                data: productUpdate
            })

        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })
        }
    }

    async delete (req: Request, res: Response) {

        try {
            
            const { id } = req.params

            const productDeleted = await this.repository.delete(id)

            res.status(200).json({
                msj: "product deleted",
                data: productDeleted
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })
        }
    }
}