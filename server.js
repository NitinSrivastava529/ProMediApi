const express = require('express')
const app = express()
const connectDB = require('./config/MongoDB')
const bosyParser = require('body-parser')
const dotEnv = require('dotenv')
const cors = require('cors');
dotEnv.config();
const PORT = process.env.PORT || 3000;

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

//init
connectDB();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('./uploads'));

//init Category Routes
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);

app.listen(PORT, () => {
    console.log(`Server Started at Port : ${PORT}`);
})



