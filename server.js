require("dotenv").config()
const { PORT = 3001, DATABASE_URL } = process.env
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

// Initiate express
const app = express()

// Router
const memoryRouter = require('./routes/Memory')

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// Database connection 
require('./config/database')

//models
const Memory = require('./models/Memory')


// Routes
app.use("/", memoryRouter)

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))