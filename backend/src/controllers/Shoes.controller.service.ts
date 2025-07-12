import { ShoesRepository } from "../repositories/ShoeRepository";
import { Request, Response } from "express";


export class ShoesControllerService {

    private repository : ShoesRepository

    constructor (
        repository : ShoesRepository
    ){
        this.repository = repository
    }

    async create (req: Request, res: Response) {

        try {
            
            const makeShoe = await this.repository.create(req.body)

            res.status(200).json({
                msj: "shoe created",
                data: makeShoe
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error (error as string)

        }

    }

    async getById (req: Request, res: Response) {

        const { id } = req.params
        try {
            
            const Shoe = await this.repository.getById(id)

            res.status(200).json({
                msj: "shoe found",
                data: Shoe
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error(error as string)
        }
    }

    async getAll (req: Request, res: Response) {

        try {
            
            const Shoes = await this.repository.getAll()

            res.status(200).json({
                msj: "shoues gets",
                data: Shoes
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error (error as string)
        }
    }

    async update (req: Request, res: Response) {

        try {
            
            const { id } = req.params

            const ShoeUpdate = await this.repository.update(req.body, id)

            res.status(200).json({
                msj: "shoe updated",
                data: ShoeUpdate
            })
            
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error (error as string)
        }
    }

    async deleteShoe (req: Request, res: Response) {

        try {
            
            const { id } = req.params

            const shoeDeleted = await this.repository.delete(id)

            res.status(200).json({
                msj: "shoe deleted",
                data: shoeDeleted
            })
        } catch (error) {
            
            res.status(500).json({
                msj: "uknow error",
                error: error instanceof Error
            })

            throw new Error (error as string)
        }
    }


}