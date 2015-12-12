var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');

module.exports = function(app){

	app.get('/customers',function(req,res){
		customers.show(req,res);
	});

	app.get('/orders',function(req,res){
		orders.show(req,res);

	})

	app.get('/products',function(req,res){
		products.show(req,res);

	})

	app.post('/customers/new',function(req,res){
		console.log('customers constorller',req.body)

		customers.create(req,res);
	});

	app.post('/orders/new',function(req,res){
		orders.create(req,res);
	})

	app.post('/orders/destroy',function(req,res){
		console.log(req.body)
		orders.destroy(req,res);
	})

};