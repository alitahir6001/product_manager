const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title is required"]
    },

    price:{
        type: Number,
        required: [true, "A price is required"]
    },

    description:{
        type: String,
        required: [true, "A description is required"]
    }

}, {timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;