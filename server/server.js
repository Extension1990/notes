const express = require("express");
const app = express();
const notesRoutes = require('./routes/notes.routes');

app.use('/api/notes', notesRoutes);

app.listen(5000, console.log("Server running on PORT 5000..."));