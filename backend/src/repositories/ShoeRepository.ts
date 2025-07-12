import { ShoesInterface } from "../interfaces/Shoes/ShoesInterface";
import { ShoesRespositoryInterface } from "../interfaces/Shoes/ShoesRepositoyInterface";
import { ModelShoes } from "../models/Model.Shoes";



export class ShoesRepository implements ShoesRespositoryInterface {

    private model : typeof ModelShoes

    constructor(
        model : typeof ModelShoes
    ){
        this.model = model
    }

    async getById(id: string): Promise<ShoesInterface> {
        
        try {

            const ShoesRequest = await this.model.findById(id)

            return ShoesRequest!
            
        } catch (error) {
            
            throw new Error (`${error}`)
        }
    }

    async getAll(): Promise<ShoesInterface[]> {

        try {
            
            const ShoesRequest = await this.model.find()

            return ShoesRequest

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    }
    async create(data: Partial<ShoesInterface>): Promise<ShoesInterface> {
        
        try {
            
            const shoesRequest = await this.model.create(data)

            return shoesRequest

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    }
    async update(data: Partial<ShoesInterface>, id: string): Promise<ShoesInterface> {
        
        try {
            
            const ShoesRequest = await this.model.findByIdAndUpdate(id, data)

            return ShoesRequest!

        } catch (error) {
            
            throw new Error (`${error}`)
        }
    }
    async delete(id: string): Promise<ShoesInterface> {
        
        try {
            
            const ShoesRequest = await this.model.findByIdAndDelete(id)

            return ShoesRequest!

        } catch (error) {
            
            throw new Error ( error as string )
        }
    }


}