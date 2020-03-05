DROP DATABASE IF EXISTS GroceryList;

CREATE DATABASE GroceryList;

USE GroceryList; 

CREATE TABLE GroceryItems(
    id INT AUTO_INCREMENT, 
    itemName VARCHAR(150), 
    PRIMARY KEY(id)
);

