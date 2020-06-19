//const AFINN = require("C:/Users/shakt/Desktop/major project/project/AFINN.json");
var express = require ('express');
    app = express();
    bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.render("wel");
});

app.get("/main",function(req,res){
    res.render("main");
});

app.get("/emote",function(req,res){
    res.render("emote");
})

app.get("/result",function(req,res){
    res.render("result");
})

app.listen(3000, function(){
    console.log("Server initiated!!");
});