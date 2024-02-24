const express = require("express");
const cros = require('cors');


const app = express();

app.use(cros());

app.use(require("./router/allRouter"));

app.get("/", (req,res) => {
    res.send('Welcome Express');
})


app.listen(8000, () => console.log("Connected to 8000"));