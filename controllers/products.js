const products = [];

exports.getAddProducts = (req, res, next) => {
  res.render('add-product.pug', { title: 'Add Product', path: '/admin/add-product' });
  // const page = path.join(root, 'views', 'add-product.html');
  // res.sendFile(page);
};

exports.postAddProducts = (req, res) => {
  products.push({
    title: req.body.title,
  });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', { title: 'Shop', path: '/', products });
};
