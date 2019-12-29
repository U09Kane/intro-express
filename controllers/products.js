const Product = require('../models/product');


exports.getAddProducts = (req, res, next) => {
  res.render('add-product.pug', { title: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProducts = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop', { title: 'Shop', path: '/', products });
  });
};
