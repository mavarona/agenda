const express = require('express');
const connectDB = require('./config/db');

// Create Server
const app = express();

connectDB();

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});