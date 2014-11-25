/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

//connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.entries_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `matchnum` INT NOT NULL, \
    `team` INT NOT NULL, \
    `alliance` CHAR(5) NOT NULL, \
    `autohigh` INT NOT NULL DEFAULT 0, \
    `autolow`	INT NOT NULL DEFAULT 0, \
    `autohighhot` INT NOT NULL DEFAULT 0, \
    `autolowhot` INT NOT NULL DEFAULT 0, \
    `mobility`	CHAR(5) NOT NULL, \
    `high` INT NOT NULL DEFAULT 0, \
    `low` INT NOT NULL DEFAULT 0, \
    `passm` INT NOT NULL DEFAULT 0, \
    `passr` INT NOT NULL DEFAULT 0, \
    `truss` INT NOT NULL DEFAULT 0, \
    `catch` INT NOT NULL DEFAULT 0, \
    `deadball` CHAR(5) NOT NULL, \
    `foultwenty` INT NOT NULL DEFAULT 0, \
    `foulfifty` INT NOT NULL DEFAULT 0, \
    `comment` VARCHAR(255), \
    `created` datetime DEFAULT 0, \
    `modified` datetime DEFAULT 0, \
    `user_id` int(11) DEFAULT 0, \
    PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
)');

console.log('Success: Match Entries Table Created!')

connection.end();
