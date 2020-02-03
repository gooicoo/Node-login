var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))


var users = {
  'paco':'noni',
  'oscar':'noni',
  'didac':'noni',
}

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
