const ProductController = require('../controllers/ProductMgr.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.index);
    app.post('/api/products', ProductController.create);
    app.get('/api/products/:id', ProductController.show);
    app.put('/api/products/:id', ProductController.update);
    app.delete('/api/products/:id', ProductController.destroy);
}