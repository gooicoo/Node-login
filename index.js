var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');



var users = {
  'didac':'noni',
}


// parte del login
app.get('/login', function (req, res) {
  res.render('loginfrom');
});

app.post('/login', function (req, res) {
  var user = '';
  var inputUser = req.body.username;

  if ( req.body.username in users ) {
    if ( req.body.password == user[inputUser] ) {
      user = inputUser;
    }
  }
  res.render('loginfromPost' , {user:user} );
});


// parte del registro
app.get('/registro', function (req, res) {
  res.render('registro');
});

app.post('/registro', function (req, res) {
  var user = req.body.username;
  var pass = req.body.password;

  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require ('node-localstorage'). LocalStorage;
    localStorage = new LocalStorage ('./ scratch');
  }

  localStorage.setItem('user', 'pass');
  res.render('registroCorrecto');
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
