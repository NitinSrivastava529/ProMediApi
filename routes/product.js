const express = require('express')
const app = express();
const router = express.Router();
const { ProductList, ProductListById, AddProduct, UpdateProduct, DeleteProduct } = require('../controllers/product')
const multer = require('multer')

const uploadConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}.${JSON.parse(req.body.obj).name.replace(/\s/g, '')}.${file.originalname.split('.')[1]}`)
    }
})
const upload = multer({ storage: uploadConfig })

router.get('/', ProductList);
router.get('/:id', ProductListById);
router.post('/', upload.single('photo'), AddProduct);
router.put('/:id', UpdateProduct);
router.delete('/:id', DeleteProduct);

module.exports = router;