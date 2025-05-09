const Product = require('../models/product')

const ProductList = async (req, res) => {
    try {
        const productList = await Product.find();
        res.status(201).json(productList);
    } catch (error) {
        console.error('Error Found : ' + error.message)
    }
}

const ProductListById = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if (!product)
            res.status(404).json({ message: 'product not found!' });
        res.status(201).json(product);
    } catch (error) {
        console.error('Error Found : ' + error.message)
    }
}
const AddProduct = async (req, res) => {
    try {
        const { filename } = req.file;
        const {category,name,mg,qty,price,discount,description,brand}=JSON.parse(req.body.obj);    
        const newProduct = new Product({
            category: category,
            name: name,
            mg: mg,
            qty: qty,
            price: price,
            discount:discount,
            description: description,
            brand: brand,
            photo: [filename]
        });
        const result = await newProduct.save();
        res.status(201).json({ message: 'product added successfully.', result });
    } catch (error) {
        console.error('Error Found : ' + error.message)
    }
}
const UpdateProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const result = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ message: 'product updated successfully.', result });
    } catch (error) {
        console.error('Error Found : ' + error.message)
    }
}
const DeleteProduct = async (req, res) => {
    try {
        const result = await Product.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json({ message: 'product deleted successfully.', result });
    } catch (error) {
        console.error('Error Found : ' + error.message)
    }
}

module.exports = { ProductList, ProductListById, AddProduct, UpdateProduct, DeleteProduct }