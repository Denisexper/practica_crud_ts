import { ProductsI } from "./Productos";

export interface ProductRepository {

    getAll (): Promise<Partial<ProductsI[]>>,
    getById (id: string): Promise<Partial<ProductsI>>,
    create (data: ProductsI): Promise<Partial<ProductsI>>,
    update(id: string, data: ProductsI): Promise<Partial<ProductsI>>,
    delete(id: string): Promise<Partial<ProductsI>>

}