const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//For serving static files
app.use('/static', express.static('static'));

//set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname, 'views'));

//Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello Comrade!, China should be taken down as they ar becoming a nuissance for us' })
});

app.get("/", (req, res)=>{
    res.send("We are unconquorable. If we must win this battle alone, we shall do that too")
});

app.get("/about", (req, res)=>{
    res.send("Hell comrade")
});

app.post("/about", (req, res)=>{
    res.send("Helloooooooo comrade")
}); 

app.post("/capitalism", (req, res)=>{
    res.status(400).send("That doesn't exist comrade")
});

app.listen(port, ()=>{
    console.log(`App started succesfully at port ${port}`)
})