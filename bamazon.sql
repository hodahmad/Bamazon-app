DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    item_id VARCHAR(30) NULL,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price INT NULL,
    stock_quantity  INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("firstitem", "Instant Coffee Mix - 100CT", "Food and Grocery", 12, 50),
("firstItem", "Pancake Mix", "Food and Grocery", 5, 100),
("secondItem", "Honey Bunches of Oats", "Food and Grocery", 4, 50),
("thirdItem", "Purito Sunscreen SPF 50", "Beauty", 14, 30),
("fourthItem", "Kirby Star Allies - Nintendo Switch", "Video Games", 50, 100),
("fifthItem", "iPad 9.7 Inch Case", "Electronics", 16, 70),
("sixthItem", "Apple AirPods", "Electronics", 145, 50),
("seventhItem", "Super Smash Bros. Ultimate", "Video Games", 60, 50),
("eigthItem", "Mamonde Rose Water Toner", "Beauty", 12, 50),
("ninthItem", "TONYMOLY Sheet Mask Pack of 11", "Beauty", 11, 50);