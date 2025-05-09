const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://nitinksrivastava529:s8tPltWLFzZJ45Hq@cluster0.jztawj0.mongodb.net/`)
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