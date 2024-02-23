const express = require("express");
const connection = require('./utils/database');
const cros = require('cors');


const app = express();

app.use(cros());

// app.use((req,res,next) => {
//     req.socket = connection;
//     next();
// })

app.use(require("./router/allRouter"));

app.get("/", (req,res) => {
    res.send('Welcome Express');
})

// app.get('/users', (req, res) => {
//     req.socket.query('select * from user_master', (err,data) => {
//         if(err) throw err;
//         console.log(data);
//         res.send(data)
//     })
//   });

app.listen(8000, () => console.log("Connected to 8000"));