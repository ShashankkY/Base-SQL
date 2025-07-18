const express = require('express')
const db = require('./utils/db-connection');
const studentsRoutes = require('./routes/studentsRoutes');
const courseRoutes = require('./routes/courseRoutes');

require('./models')

const app = express();


app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.use("/students",studentsRoutes);
app.use("/courses",courseRoutes);



db.sync({force:false}).then(()=>{
    app.listen(3000,(err)=>{
        console.log("Server is running");
    })
}).catch((err)=>{
    console.log(err);
})




