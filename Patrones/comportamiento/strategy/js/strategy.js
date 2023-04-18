class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calcular(monto) {
    return this.strategy.calcular(monto);
  }
}

class RegularSaleStrategy {
  constructor(impuesto) {
    this.impuesto = impuesto;
  }

  calcular(monto) {
    return monto + monto * this.impuesto;
  }
}

class DiscountSaleStrategy {
  constructor(impuesto, discount) {
    this.impuesto = impuesto;
    this.discount = discount;
  }

  calcular(monto) {
    return monto + monto * this.impuesto - this.discount;
  }
}

class ForeignSaleStrategy {
  calcular(monto) {
    return monto * this.getDollarPrice();
  }

  getDollarPrice() {
    return 7;
  }
}

const regularSale = new RegularSaleStrategy(0.13);
const discountSale = new DiscountSaleStrategy(0.13, 3);
const foreignSale = new ForeignSaleStrategy();

const sale1 = new SaleContext(regularSale);
console.log(sale1.calcular(10));

const sale2 = new SaleContext(discountSale);
console.log(sale2.calcular(100));

let sale = new SaleContext(regularSale);
console.log(sale.calcular(10));
sale.setStrategy(discountSale);
console.log(sale.calcular(10));
sale.setStrategy(foreignSale);
console.log(sale.calcular(10));
