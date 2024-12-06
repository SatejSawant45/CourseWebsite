const express = require("express");
const { User }= require("./Database/index");

const app = express();

app.use(express.json());

app.post("/register",async function(req,res)
{
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const contact = req.body.contact;
    

    await User.create({
        firstname:firstname,
        middlename:middlename,
        lastname:lastname,
        email:email,
        contact:contact
    })
    res.send("Participent Registered Sucessfully");

})

app.listen(3000);

