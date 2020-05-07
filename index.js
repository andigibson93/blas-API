const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static('Resources'));

app.get('/', function (req, res) {
    res.send({hello: 'world'})
})

//This route is depreciated
app.get('/all-assets', function(req, res){
    const files = fs.readdirSync("./Resources");
    res.send({assest: files})
})

app.get('/categories', function(req, res){
    const files = fs.readdirSync("./Resources");
    const filteredCategories = files.filter(directory => fs.lstatSync("./Resources/" + directory).isDirectory());
    res.send({categories: filteredCategories})
})

app.get('/categories/:category', function(req, res){
    let params = req.params
    let category = params.category
    const files = fs.readdirSync(`./Resources/${category}`);
    res.send({assest: files})
})

let PORT = process.env.PORT || 3000;

app.listen(PORT)