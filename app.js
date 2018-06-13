const express = require('express')
const pug = require('pug')

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

// app.get('*', function (req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello!' })
// })

app.get('/login', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello!' })
})

app.get('/list', function(req, res) {
  res.render('list', {


    list: [
    {id: 1, name: "zzz",gender: 'M'},
    {id: 2, name: "xxx",gender: 'F'},
    {id: 3, name: "xxx",gender: 'F'},
    {id: 2, name: "xxx",gender: 'F'},
    {id: 2, name: "xxx",gender: 'F'},
    {id: 2, name: "xxx",gender: 'F'},
  ]})
})

app.get('/test',function(req,res,next){
  res.render('index.html');

});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})