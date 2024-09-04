"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.stock = [];
    }
    Portfolio.prototype.addItem = function (item) {
        this.stock.push(item);
    };
    Portfolio.prototype.profit = function (start, end) {
        var totalProfit = 0;
        var startValue = 0;
        var initalDate = undefined;
        this.stock.forEach(function (item) {
            var dateKeys = Object.keys(item.prices).filter(function (key) {
                var itemDate = new Date(key);
                if (itemDate <= end && itemDate >= start) {
                    return key;
                }
            });
            var startKey = dateKeys.shift();
            var endKey = dateKeys.pop();
            if (endKey && startKey) {
                var endDate = new Date(endKey);
                var startDate = new Date(startKey);
                if (!initalDate) {
                    initalDate = startDate;
                }
                else {
                    if (startDate < initalDate) {
                        initalDate = startDate;
                    }
                }
                totalProfit += item.price(endDate) - item.price(startDate);
            }
        });
        this.stock.forEach(function (item) {
            if (initalDate)
                startValue += item.price(initalDate);
        });
        var years = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
        if (initalDate)
            console.log("años", years);
        var annualizedReturn = Math.pow((startValue / totalProfit), (1 / years)) - 1;
        return {
            profit: totalProfit,
            annualizedReturn: annualizedReturn.toString(),
        };
    };
    return Portfolio;
}());
exports.Portfolio = Portfolio;
