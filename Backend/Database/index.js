const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://satejsawant90:llMHIjVUoKUzecxR@satejsawant90cluster.rpwzqu1.mongodb.net/Participants");

const participantSchema = new mongoose.Schema({

    firstName:String,
    middleName:String,
    lastName:String,
    email:String,
    contact:String,
    transactionId:String
})

const User = mongoose.model('User',participantSchema);

module.exports = {
    User
}
