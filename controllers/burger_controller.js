var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
      var sendData = {
        burgers: data
      };
      res.render('index', sendData);
    });
  });

router.post('/add', function(req, res){
  var name = req.body.name
  burger.insertOne(name,function(data){
    res.send(data);
  })
})

router.put('/update', function(req, res){
  var id = req.body.id
  burger.updateOne(id,function(data){
    res.send(data);
  })
})

module.exports = router;