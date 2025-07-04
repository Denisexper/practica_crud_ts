import { model, Schema } from "mongoose"
import { ProductsI } from "../interfaces/Productos"

const SchemaProducts = new Schema<ProductsI>({

    name: {
         type: String,
         required: [true, "name is required"]
    },

    category: {
        type: String,
        required: [true, "category is required"]
    },

    stock: {
        type: Number,
        required: [true, "stock is required"]
    },

    price: {
        type: Number,
        required: [true, "price is required"]
    },

    sku: {
        type: Number,
        required: [true, "code is required"]
    }
})

export const ModelProducts = model("products", SchemaProducts)