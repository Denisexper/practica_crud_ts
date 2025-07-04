import { ProductsI } from "../interfaces/Productos"
import { ProductRepository } from "../interfaces/ProductosRepository"
import { ModelProducts } from "../models/Products"

export class ProductsRepositoryService implements ProductRepository {

    private model : typeof ModelProducts

    constructor(
        model: typeof ModelProducts
    ){
        this.model = model
    }

    async getAll(): Promise<Partial<ProductsI[]>> {
        
        try {
            
            const findAll = await this.model.find()

            return findAll

        } catch (error) {
            
            throw new Error("Method not implemented.")
        }
    }

    async getById(id: string): Promise<Partial<ProductsI>> {
        
        try {
            
            const findById = await this.model.findById(id)

            return findById!

        } catch (error) {
            
            throw new Error("Method not implemented.")
        }
    }
    async create(data: ProductsI): Promise<Partial<ProductsI>> {
        
        try {
            
            const create = await this.model.create(data)

            return create

        } catch (error) {
            
            throw new Error("Method not implemented.")
        }
    }
    async update(id: string, data: ProductsI): Promise<Partial<ProductsI>> {
        
        try {
            
            const update = await this.model.findByIdAndUpdate(id, data)

            return update!

        } catch (error) {
            
            throw new Error("Method not implemented.")
        }
    }
    async delete(id: string): Promise<Partial<ProductsI>> {
        
        try {
            
            const deleteProduct = await this.model.findByIdAndDelete(id)

            return deleteProduct!
            
        } catch (error) {
            
            throw new Error("Method not implemented.")
        }
    }
}