import { Stock } from "./stock";
export class Portfolio {
  stock: Stock[];

  constructor() {
    this.stock = [];
  }

  addItem(item: Stock) {
    this.stock.push(item);
  }

  profit(start: Date, end: Date): { profit: number; annualizedReturn: string } {
    let totalProfit = 0;
    let startValue = 0;
    let initalDate: Date | undefined = undefined;

    this.stock.forEach((item) => {
      const dateKeys = Object.keys(item.prices).filter((key) => {
        const itemDate = new Date(key);
        if (itemDate <= end && itemDate >= start) {
          return key;
        }
      });
      const startKey = dateKeys.shift();
      const endKey = dateKeys.pop();

      if (endKey && startKey) {
        const endDate = new Date(endKey);
        const startDate = new Date(startKey);

        if (!initalDate) {
          initalDate = startDate;
        } else {
          if (startDate < initalDate) {
            initalDate = startDate;
          }
        }
        totalProfit += item.price(endDate) - item.price(startDate);
      }
    });

    this.stock.forEach((item) => {
      if (initalDate) startValue += item.price(initalDate);
    });

    const years = end.getUTCFullYear() - start.getUTCFullYear();

    const annualizedReturn = (startValue / totalProfit) ** (1 / years) - 1;

    return {
      profit: totalProfit,
      annualizedReturn: annualizedReturn.toString(),
    };
  }
}
