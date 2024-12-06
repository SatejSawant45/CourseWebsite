const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://satejsawant90:llMHIjVUoKUzecxR@satejsawant90cluster.rpwzqu1.mongodb.net/Participants");

const participantSchema = new mongoose.Schema({

    firstname:String,
    middlename:String,
    lastnmae:String,
    email:String,
    contact:String

})

const User = mongoose.model('User',participantSchema);

module.exports = {
    User
}
