const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart(car){
    this.cart.push(car);
    this.total += car.price;
  },

  removeFromCart(index, price){
    this.cart.splice(index, 1);
    this.total -= price;
  },

  checkout(){
    this.cart = [];
    this.total = 0;
  }
};
