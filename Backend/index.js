const express = require("express");
const cors = require("cors");
const { User }= require("./Database/index");

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  // Allow only the frontend URL to access
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(express.json());

app.post("/register",async function(req,res)
{
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const contact = req.body.contact;
    const transactionId = req.body.transactionId;
    

    await User.create({
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        email:email,
        contact:contact,
        transactionId:transactionId
    })
    res.send("Participent Registered Sucessfully !!");

})

app.listen(3000);

