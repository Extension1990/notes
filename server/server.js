const express = require("express");
const dotenv = require('dotenv');
const notesRoutes = require('./routes/notes.routes');
const connectDB = require('./config/db');

const app = express();
dotenv.config();
connectDB();

app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 9000; 

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));