var inquirer = require("inquirer");

var bidOrPost = function() {
    inquirer.prompt([

    {
        type: "list",
        name: "bid/post",
        message: "Do you want to bid or post an item?",
        choices: ["Bid", "Post"]
    }
    ]).then(function(response){

    });
}

bidOrPost();