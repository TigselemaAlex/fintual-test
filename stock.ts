export class Stock {
  itemName: string;
  prices: { [dateKey: string]: number };

  constructor(itemName: string, prices: { [dateKey: string]: number }) {
    this.itemName = itemName;
    this.prices = prices;
  }

  price(date: Date) {
    const year = date.getUTCFullYear();
    const month = this.twoDigits((date.getUTCMonth() + 1).toString());
    const day = this.twoDigits(date.getUTCDate().toString());
    const dateKey = `${year}-${month}-${day}`;
    return this.prices[dateKey] ?? 0;
  }

  private twoDigits(value: string) {
    if (value.length === 1) {
      return `0${value}`;
    }
    return value;
  }
}
