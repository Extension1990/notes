const express = require("express");
const dotenv = require('dotenv');
const notesRoutes = require('./routes/noteRoutes');
const userRoutes = require("./routes/userRoutes");
const connectDB = require('./config/db');
const cors = require("cors");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));

app.use('/api/users', userRoutes);
app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`));