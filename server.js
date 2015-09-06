var express = require('express'),
    app = express();

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

// serve static files
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// landing page route
app.get('/landing', function (req, res) {
  res.sendFile(__dirname + '/public/views/landing.html');
});

// landing page route
app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/public/views/about.html');
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});