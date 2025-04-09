const express = require('express');
const app = express(); 
const path = require("path");
const port = 3000;
const indexRouter = require("./routes/index");
const callbackRouter = require("./routes/callback");

// body-parser 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/callback", callbackRouter);
app.use("/", indexRouter);

app.listen(port,(req,res)=>{
    console.log('Connected, 3000 port!')
})
 
 