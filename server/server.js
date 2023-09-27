const express = require("express");
const app = express();
const dotenv = require('dotenv');
const notesRoutes = require('./routes/notes.routes');

dotenv.config();

app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5000;  

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));