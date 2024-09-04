"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
var Stock = /** @class */ (function () {
    function Stock(itemName, prices) {
        this.itemName = itemName;
        this.prices = prices;
    }
    Stock.prototype.price = function (date) {
        var _a;
        var year = date.getUTCFullYear();
        var month = this.twoDigits((date.getUTCMonth() + 1).toString());
        var day = this.twoDigits(date.getUTCDate().toString());
        var dateKey = "".concat(year, "-").concat(month, "-").concat(day);
        return (_a = this.prices[dateKey]) !== null && _a !== void 0 ? _a : 0;
    };
    Stock.prototype.twoDigits = function (value) {
        if (value.length === 1) {
            return "0".concat(value);
        }
        return value;
    };
    return Stock;
}());
exports.Stock = Stock;
