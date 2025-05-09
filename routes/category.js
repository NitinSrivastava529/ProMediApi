const express = require('express');
const router = express.Router();
const { CategoryList, CategoryById, AddCategory, UpdateCategory, DeleteCategory } = require('../controllers/category');

router.get('/', CategoryList);
router.get('/:id', CategoryById);
router.post('/', AddCategory);
router.put('/:id', UpdateCategory);
router.delete('/:id', DeleteCategory);

module.exports = router;