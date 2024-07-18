import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    shipping: {
        required: false,
        type: Boolean,
    },
    stock: {
        type: String,
        default: "In Stock",
        required: true,
    },
}, { timestamps: true }, { collection: "products" }, { versionKey: false }, { strict: false }, { id: true }, { toJSON: { virtuals: true } }, { toObject: { virtuals: true } },);

const Product = mongoose.model("Product", productSchema);

export default Product;