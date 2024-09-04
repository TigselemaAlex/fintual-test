import { Portfolio } from "./portfolio";
import { Stock } from "./stock";

const item_1 = new Stock("ITEM 1", {
  "2023-01-01": 150,
  "2024-01-01": 170,
});

const item_2 = new Stock("ITEM 2", {
  "2023-01-01": 1000,
  "2024-01-01": 1100,
});

const item_3 = new Stock("ITEM 3", {
  "2023-01-01": 2000,
  "2024-01-01": 2200,
});

const item_4 = new Stock("ITEM 4", {
  "2023-01-01": 700,
  "2024-01-01": 800,
});

const portfolio = new Portfolio();

portfolio.addItem(item_1);
portfolio.addItem(item_2);
portfolio.addItem(item_3);
portfolio.addItem(item_4);

const profit = portfolio.profit(new Date("2023-01-01"), new Date("2024-01-01"));

console.log(profit);
