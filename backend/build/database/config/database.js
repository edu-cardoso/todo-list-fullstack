"use strict";
var config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'senha-mysql',
    database: process.env.DB_NAME || 'todolist',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
};
module.exports = config;
