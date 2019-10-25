var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "bamazon_db"
});

// handling errors:
connection.connect(function(err) {
    if (err) throw err;
    productsAvailable();
  
  });
  
// This function will show all products that are available in the store by looping through the insert.
var productsAvailable = function() {
    var query = "Select * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].item_id + "\nDepartment: " + res[i].department_name + "\nProduct Name: " + res[i].product_name + "\nPrice: " + res[i].price);
        }
  // Requests product and number of product items user wishes to purchase.
      });
      productTransaction();
  };

/******************************************/

var productTransaction = function() {
	inquirer.prompt([{
		name: "productID",
		type: "input",
		message: "What is the ID of the product you would like to buy?",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false;
		}
	}, {
		name: "productStock",
		type: "input",
		message: "How many would you like to purchase?",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false
		}
	}]).then(function(answer) {

		var query = "Select stock_quantity, price, department_name FROM products WHERE ?";
		connection.query(query, { item_id: answer.productID}, function(err, res) {
			
			if (err) throw err;

			var currentStock = res[0].stock_quantity;
			var priceOfProduct = res[0].price;
			var productDepartment = res[0].department_name;

			if (currentStock >= answer.productStock) {
				completeTransaction(currentStock, priceOfProduct, productDepartment, answer.productID, answer.productStock);
			} else {

				// Tells user there isn't enough stock left.
				console.log("This item is out of stock, we apologize!");

				// Lets user request a new product.
				productTransaction();
			}
		});
	});
};

