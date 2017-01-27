var inquirer = require("inquirer");
var colors = require("colors");

var bidOrPost = function() {
    inquirer.prompt([

    {
        type: "list",
        name: "bid/post",
        message: "Do you want to bid or post an item?",
        choices: ["Bid".bgRed, "Post".bgBlue]
    }
    ]).then(function(response){

    });
}

bidOrPost();