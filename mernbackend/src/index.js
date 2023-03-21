require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");
const path = require("path");


const public = path.join(__dirname, "../public");


app.use(express.static(public));
app.get("/",(req,res) =>  {
    res.send("Hii I am live")
})

const start = async() => {
    await connectDB(process.env.MONGODB_URL);
    try {
        app.listen(PORT, () => {
            console.log("Server Connected")
        })
    } catch (error){
        console.log(error)
    }
}

start();