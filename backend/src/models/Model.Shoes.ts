import { model, Schema } from "mongoose";
import { ShoesInterface } from "../interfaces/Shoes/ShoesInterface";


const ShoesSchema = new Schema<ShoesInterface>({

    color : {
        type: String,
        required: [true, "the color is required"]
    },

    size: {
        type: Number,
        required: [true, "size is required"]
    },

    brand: {

        type: String,
        required: [true, "brand is required"]
    },

    style : {
        type: String,
        required: [true, "style is required"]
    }
})

export const ModelShoes = model("shoes", ShoesSchema)