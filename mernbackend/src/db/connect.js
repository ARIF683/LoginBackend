const mongoose = require("mongoose");
const uri = "mongodb+srv://SHAHAZIM:SHAHAZIM@backend.yocooyj.mongodb.net/BACKEND?retryWrites=true&w=majority";
const connectDB = async () => {
    console.log("Databse Connected")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;