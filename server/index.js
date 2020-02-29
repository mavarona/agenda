const express = require('express');
const connectDB = require('./config/db');

// Create Server
const app = express();

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});