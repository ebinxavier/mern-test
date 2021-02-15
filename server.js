const express = require('express')
const app = express();
const connectDb = require('./database/db')
connectDb();
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listen port ${port}`))