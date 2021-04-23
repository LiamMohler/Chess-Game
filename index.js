let express = require('express');
var bodyParser = require('body-parser');
var routes = require("./routes");
var boardjs = require("./board");
var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./'));
app.use('/js', express.static('./public/js'));
app.use(routes);

const port=4001;
app.listen(port,function(){
  console.log("Listening on Port "+port);
})
