const cart = require('./cart')
    , cars = require('./data/cars');

describe('Cart Properties: ', ()=>{
  const {cart, total} = cart;

  test('Check if cart.cart is an array and is empty', ()=>{
    expect(Array.isArray(cart)).toEqual(true);
    expect(cart.length === 0).toEqual(true);
  });

  test('Check if cart.total is number and zero', ()=>{
    expect(total).toEqual(0);
  });
});

describe('Cart Methods: ',()=>{
  test('Check if cart.addToCart increases the cart\'s cart.length each call and that it is adding to the end of cart.cart', ()=>{
    cart.addToCart(cars[3]);
    cart.addToCart(cars[4]);
    cart.addToCart(cars[6]);
    expect(cart.length).toEqual(3);
    expect(cart.cart[0]).toEqual(cars[3]);
    expect(cart.cart[4]).toEqual(cars[4]);
    expect(cart.cart[6]).toEqual(cars[6]);
  });

  test('Check if cart.addToCart increases the cart.total by the passed in car object\'s price on each call', ()=>{
    cart.addToCart(cars[1]);
    cart.addToCart(cars[4]);
    cart.addToCart(cars[8]);
    expect(cart.total).toEqual(cars[1].price + cars[4].price + cars[8].price);
  });

  test('Check if cart.removeFromCart removes carts from cart.cart and keeps the order', ()=>{
    cart.addToCart(cars[6]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[4]);
    cart.addToCart(cars[3]);
    cart.removeFromCart(1, cars[1].price);
    expect(cart.cart.length).toEqual(3);
    expect(cart.cart[1]).toEqual(cars[4]);
    cart.removeFromCart(1, cars[4].price);
    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[1]).toEqual(cars[3]);

  });

  test('Check if cart.removeFromCart decreases the total price on each call', ()=>{
    cart.addToCart(cars[6]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[4]);
    cart.addToCart(cars[3]);
    cart.removeFromCart(1, cars[1].price);
    expect(cart.total).toEqual(cars[6].price + cars[4].price + cars[3].price);
    cart.removeFromCart(1, cars[4].price);
    expect(cart.total).toEqual(cars[6].price + cars[3].price);
  });

  test('Check if cart.checkout sets cart.cart.length to 0 and the cart.total to 0', ()=>{
    cart.checkout();
    expect(cart.cart.length === 0).toEqual(true);
    expect(cart.total).toEqual(0);
  });
});
