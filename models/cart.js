const fs = require('fs');
const path = require('path');


const fpath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json',
)

module.exports = class Cart {
  // Because cart is always present we don't need constructor
  static addProduct(id, price) {
    fs.readFile(fpath, (err, content) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(content);
      }
      const existingProductIdx = cart.products.findIndex(d => d.id === id);
      const existingProduct = cart.products[existingProductIdx];
      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIdx] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1};
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice += Number(price);
      fs.writeFile(fpath, JSON.stringify(cart), (err) => { console.log(err); });
    });
  }
}
