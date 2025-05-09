const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    mg: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    brand: {
        type: String,
        required: true
    },
    photo: [{
        type: String,
        required: true
    }],
}, { timestamps: true });

const Product = mongoose.model('product', productSchema);

module.exports = Product;



//  {
//     "category":"Pharmacy Updated",
//     "name":"Tramadol",
//     "mg":"100 mg",
//     "qty":"90",
//     "price":"250",
//     "discount" :"120",
//     "description":"Pharmacy Updated:Tramadol:100 mg",
//     "brand":"Oltram",
//     "photo":["https://img.freepik.com/premium-photo/3d-capsule-tablet-medicine-white-background_268269-195.jpg?semt=ais_hybrid&w=740"]
// }