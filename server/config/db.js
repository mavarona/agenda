const moongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async() => {
    try {
        await moongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database Connected');
    } catch (err) {
        console.log('Error connect DB', err);
        process.exit(1);
    }
}

module.exports = connectDB;