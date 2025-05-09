const Category = require('../models/category')

const CategoryList = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(201).json(category);
    } catch (error) {
        console.error(error.messsage)
    }
}
const CategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id });
        res.status(201).json(category);
    } catch (error) {
        console.error(error.messsage)
    }
}
const AddCategory = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const { name } = newCategory;
        const categoryExists = await Category.findOne({ name })
        if (categoryExists)
            res.status(401).json({ message: 'Category Already Exists!' });

        const result = await newCategory.save();
        res.status(201).json({ message: 'new category created.' }, result);
    } catch (error) {
        console.error(error.messsage)
    }
}
const UpdateCategory = async (req, res) => {
    try {

        const { name } = req.body.name;
        const categoryExists = await Category.findOne({ name })
        if (categoryExists)
            res.status(401).json({ message: 'Category Already Exists!' });

        const category = await Category.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ msg: 'category updated.' }, category);
    } catch (error) {
        console.error(error.messsage)
    }
}
const DeleteCategory = async (req, res) => {
    try {
        const result = await Category.findByIdAndDelete(req.params.id);
        res.status(201).json({ msg: 'category Deleted.' }, result);
    } catch (error) {
        console.error(error.messsage)
    }
}

module.exports = { CategoryList, CategoryById, AddCategory, UpdateCategory, DeleteCategory }