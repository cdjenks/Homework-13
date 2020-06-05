DROP DATABASE IF EXISTS company_db;

CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(40),
    devoured BOOLEAN,
    PRIMARY KEY(id)
)