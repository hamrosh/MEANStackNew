const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


const config = require('./config/database');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

app.use(express.static(__dirname+'/angclient/dist/'));

app.get('*',  (req, res) => {
    res.sendfile(path.join(__dirname+'angclient/dist/index.html'));
  });
  
  app.listen(8080,()=>{
      console.log('Server started on 8080');
  });