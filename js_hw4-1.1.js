function ProductEs5(name, price) {
  this.name = name;
  this.price = price;
}

ProductEs5.prototype.make25PercentDiscount = function () {
  this.price *= 0.75;
};

class ProductEs6 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price *= 0.75;
  }
}
