const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  let { edit = false } =  req.query;
  edit = Boolean(edit);
  const { productID } = req.params;
  !edit ? res.redirect('/') : null;

  Product.findByID(productID, (product) => {
    if (!product) {
      res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: edit,
      product,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const {
    productID,
    title,
    price,
    imageUrl,
    description,
  } = req.body;
  const updatedProduct = new Product(productID, title, imageUrl, description, price);
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const { productID } = req.params;
  Product.findByID(productID, product => Product.delete(productID));
  res.redirect('/admin/products');
};
