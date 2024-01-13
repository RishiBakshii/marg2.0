const cookieParser = require("cookie-parser")
const express=require("express")
const morgan = require("morgan")
const cors=require("cors")
const { connectToDb } = require("./database/db")

require("dotenv").config()


// server init
const server=express()

// database connection
connectToDb()

// middlewares
server.use(express.json())
server.use(cookieParser())
server.use(morgan('tiny'))
server.use(cors({credentials:true,origin:process.env.ORIGIN}))


server.get("/",(req,res)=>{
    res.status(200).json({running:true})
})

server.listen(8000,()=>{
    console.log('server [STARTED]');
})