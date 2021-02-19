const express = require('express')
const app = express();
const connectDb = require('./database/db')
const dotenv = require("dotenv")
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
dotenv.config()
//middlewares
app.use(cors())
app.use(morgan('dev'))
//parse incoming request to json
app.use(express.json())
app.use('/api/auth/', authRoutes)
app.use('/api/category', categoryRoutes)

connectDb();
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listen port ${port}`))