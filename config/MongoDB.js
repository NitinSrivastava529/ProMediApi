const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log('MongODB Connected!');
        })
        .catch(()=>{
            console.log('MongODB Connected!');
        });
        
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;