let path = require("path");
let express = require("express");
let router = express.Router();
var boardjs = require("./board");

router.get('/', function (req, res, next) {
	res.sendFile(__dirname + "/public/views/select.html");
})

router.post("/setUserName",function(req,res,next){
  if(boardjs.players.player1 == null){
    boardjs.players.player1 = req.body.name;
    res.redirect("/play?name=" + req.body.name + "&num=1");
    return;
  }
  else if(boardjs.players.player2 == null){
    boardjs.players.player2 = req.body.name;
    res.redirect("/play?name=" + req.body.name + "&num=2");
    return;
  }
  res.send("Too many people are playing");
})

router.post("/update",function(req,res,next){
  boardjs.board.board.move(req.body.moveFrom,req.body.moveTo,req.body.name);
  res.end();
})


router.get("/read",function(req,res,next){
  res.send(boardjs.board);
})

router.get("/play",function(req,res,next){
  res.sendFile(__dirname + "/public/views/chess.html");
})

module.exports = router;
