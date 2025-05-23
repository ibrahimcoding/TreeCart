import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

// App config 

const app =express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()


// middlewears 
app.use(express.json())
app.use(cors())

// api endpoint 
app.get('/',(req,res)=>{
    res.send("API Working")
})

// start express server 
app.listen(port,()=>console.log('Server started on port:'+port))