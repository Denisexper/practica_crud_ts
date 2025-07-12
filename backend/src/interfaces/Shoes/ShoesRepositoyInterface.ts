import { ShoesInterface } from "./ShoesInterface";




export interface ShoesRespositoryInterface {

    getById(id:string) : Promise<ShoesInterface>,

    getAll() : Promise<ShoesInterface[]>,

    create(data: Partial<ShoesInterface>) : Promise<ShoesInterface>,

    update(data: Partial<ShoesInterface>, id: string) : Promise<ShoesInterface>,

    delete(id: string) : Promise<ShoesInterface>
}