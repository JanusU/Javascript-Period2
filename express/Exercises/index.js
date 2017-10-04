const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Code')
})

app.get('/numbers', function (req, res) {
    res.send([1,2,3,4,5,6])
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get("/api/calculator/:operation/:n1/:n2",function(req,res,next){})

app.get("/api/calculator/*",function(req,res){})

var calculatorRequest = {
  operation: req.params.operation,
  n1: Number(req.params.n1),
  n2: Number(req.params.n2)
}