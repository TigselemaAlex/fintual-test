"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var portfolio_1 = require("./portfolio");
var stock_1 = require("./stock");
var stock1 = new stock_1.Stock("AAPL", {
    "2023-01-01": 150,
    "2024-01-01": 170,
});
var stock2 = new stock_1.Stock("GOOG", {
    "2023-01-01": 1000,
    "2024-01-01": 1100,
});
var stock3 = new stock_1.Stock("AMZN", {
    "2023-01-01": 2000,
    "2024-01-01": 2200,
});
var stock4 = new stock_1.Stock("TSLA", {
    "2023-01-01": 700,
    "2024-01-01": 800,
});
var portfolio = new portfolio_1.Portfolio();
portfolio.addItem(stock1);
portfolio.addItem(stock2);
portfolio.addItem(stock3);
portfolio.addItem(stock4);
var profit = portfolio.profit(new Date("2023-01-01"), new Date("2023-01-01"));
console.log(profit);
