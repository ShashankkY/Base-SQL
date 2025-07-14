const express = require('express')
const db = require('./utils/db-connection');
const studentsRoutes = require('./routes/studentsRoutes');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.use("/students",studentsRoutes);

app.listen(3000,(err)=>{
    console.log("Server is running ");
})