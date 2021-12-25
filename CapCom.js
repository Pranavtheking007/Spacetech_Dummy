const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 7009;
const hostname = '127.0.0.1';

//Express related stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG related stuff
app.set('view engine', 'pug');//Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "Emperor meji has always been a inspiration for many, how well he uplifted Japan"
    const params = {"title": "Emperor Showa", "content": con};
    res.status(200).render('index.pug', params);
})

app.post('/', (req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    More=req.body.More;
    let outputToWrite = `The name of kamikaze is ${name}, ${age} years old, is ${gender}, lives in ${address}, and is more keen on ${More}`;
    fs.writeFileSync('output.txt',outputToWrite);
    const params = {"message": "Tenno Heikai Banzai"};
    res.status(200).render('index.pug', params);
})

app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})