const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static('Resources'));

app.get('/hello', function (req, res) {
    res.send({hello: 'world'})
})

app.get('/all-assets', function(req, res){
    const files = fs.readdirSync("./Resources");
    res.send({assest: files})
})

app.listen(3000)