var inquirer = require("inquirer");
var colors = require("colors");
var mysql = require("mysql")

var bidOrPost = function() {
    inquirer.prompt([

    {
        type: "list",
        name: "bid/post",
        message: "Do you want to bid or post an item?",
        choices: ["Bid".bgRed, "Post".bgBlue]
    }
    ]).then(function(response){
        if (response.choices === 'Bid'){
            var connection = mysql.createConnection({
                host: "localhost",
                port: 3306,

                user: "root",

                password: "MyNewPass",
                database: "icecream_db"
            });

            connection.connect(function(err){
                if (err) throw err;
                console.log("connected as id " + connection.threadId);
            });
            var currentItems = function() {
                
                inquirer.prompt([
                    {

                    }
                ])
            }
        }

    });
}

bidOrPost();