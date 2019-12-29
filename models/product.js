const path = require('path');
const fs = require('fs');

const root = require('../util/path');


class Product {
  /* Represents a product in a store */
  constructor(title) {
    this.title = title;
  }

  save() {
    /* save product to the db */
    const p = path.join(root, 'data', 'products.json');
    const products = Product.fetchAll((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => { console.log(err); });
    });
  }

  static fetchAll(callback) {
    /* get all products stored in the db */
    const p = path.join(root, 'data', 'products.json');
    fs.readFile(p, (err, content) => {
      if (err) {
        callback([])
      }
      callback(JSON.parse(content));
    });
  }
}

module.exports = Product;
