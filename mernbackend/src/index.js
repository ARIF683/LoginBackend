require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");
const path = require("path");
const hbs = require("hbs");

const public_path = path.join(__dirname, "../public"); 
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(public_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);
app.get("/", (req, res) => {
    res.render("index")
})

const start = async () => {
    await connectDB(process.env.MONGODB_URL);
    try {
        app.listen(PORT, () => {
            console.log("Server Connected")
        })
    } catch (error) {
        console.log(error)
    }
}

start();