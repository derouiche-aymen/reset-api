const express = require ('express');
const app = express();
const connectDB = require ('./Config/ConnectDB');
const contactrouter = require ('./Routes/Usersroutes')

//connect db
connectDB();

//middleware
app.use(express.json());

//route
app.use('/api/Users',contactrouter);

//create port 
const Port = process.env.PORT || 6000;
app.listen (Port, (err)=>
err ? console.log('Port not connected') : console.log (`Server is running in port ${Port}`)
);
