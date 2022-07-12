const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = weight/(height^2);

    if(bmi <= 18.5){
        res.send("Your bmi is <strong>" + bmi.toFixed(1) + "</strong>. You are underweight.");
    } else if (bmi > 18.5 && bmi <= 25){
        res.send("Your bmi is <strong>" + bmi.toFixed(1) + "</strong>. You are in normal range.");
    } else if (bmi > 25 && bmi <= 30){
        res.send("Your bmi is <strong>" + bmi.toFixed(1) + "</strong>. You are overweight.");
    } else if (bmi > 30){
        res.send("Your bmi is <strong>" + bmi.toFixed(1) + "</strong>. You are in the obese range.");
    }
    
});


app.listen(3000, function(){
    console.log("Server started on Port 3000!")
});