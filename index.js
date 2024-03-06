const express = require("express");
const cros = require('cors');
const bodyParser = require('body-parser')

require("dotenv").config();

const app = express();

app.use(cros());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require("./router/allRouter"));

app.get("/", (req,res) => {
    res.send('Welcome Express');
})


app.listen(8000, () => console.log("Connected to 8000"));