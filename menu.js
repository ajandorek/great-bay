var inquirer = require("inquirer");
var colors = require("colors");
var mysql = require("mysql")

var bidOrPost = function() {
    inquirer.prompt([

    {
        type: "list",
        name: "prompt",
        message: "Do you want to bid or post an item?",
        choices: ["Bid", "Post"]
    }
    ]).then(function(response){
        console.log(response.prompt);
        if (response.prompt === "Bid"){
            var connection = mysql.createConnection({
                host: "localhost",
                port: 3306,

                user: "root",

                password: "MyNewPass",
                database: "great_bay"
            });
            connection.connect(function(err){
                if (err) throw err;
                console.log("connected as id " + connection.threadId);
            });
            var currentItem;
            var currentBid;
            connection.query('SELECT * FROM open_items', function(err, res) {
                    if (err) throw err;
                    currentItem = res[0].ITEM_DESCRIPTION;
                    currentBid = res[0].CURRENT_BID;
                    currentItems();
            }); 
            var currentItems = function() {
                inquirer.prompt([
                    {
                        name: "input",
                        message: (`Place bid for: ${currentItem}`)
                    }
                ]).then(function(response){
                    if (response.input > currentBid){
                    connection.query('UPDATE open_items SET ? WHERE ?',
                        [
                            {current_bid: response.input},
                            {item_description: currentItem}
                        ],
                        function (err, res) {});
                        console.log("Congrats! You are the highest bidder!")
                    }else{
                        console.log("Current bid is higher!");
                        bidOrPost();
                    }

                })
            }
        }

    });
}

bidOrPost();