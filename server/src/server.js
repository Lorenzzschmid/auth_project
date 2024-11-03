import express from 'express'; 
import mongoose from 'mongoose'; 

const app = express(); 

app.use(express.json()); 

const PORT = 

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})