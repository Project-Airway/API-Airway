if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const indexRouter = require('./routes/index')
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3001;

const app = express();

connectDB()

app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});