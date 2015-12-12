var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer= mongoose.model('Customer');
var Product= mongoose.model('Product');

module.exports = (function() {
  return {
    show: function(req, res) {

    Order.find({},function(err,results){
    	if(err){
    		res.send(err);
    	}
    	else{
    		res.json(results);
    	}
    })
    
    },

    create: function(req,res){
                console.log('in the orders controller create method',req.body);
              
                Product.find({_id:req.body.product},function(err,product) { 

                    console.log('found product',product);
                Customer.findOne({_id:req.body.customer},function(err,customer){
                
                console.log('found customer',customer);
                var order = new Order({customername:customer.fullname,product:product[0].product,price:product[0].price,quantity:req.body.quantity});
                
                console.log(order);
                
                order._customer = customer._id;
                customer.orders.push(order);
                
                order.save(function(err){
                customer.save(function(err){
                
                if(err){
                    console.log(err);
                    res.render('index', {title: 'you have errors!', errors: comment.errors})
                }
                else{
                    res.redirect('/');
                }
            })      
        })
    })
})

},

    destroy: function (req,res){
       console.log('here');
        console.log('in the destroy server side controller method');

        Order.remove({_id:req.body.id},function(err){
            if(err){
                console.log(err)
            }
            else {
                Order.find({},function(err,results){
                    if(err){
                        res.send(err);
                    }
                    else{
                        res.json(results);
                    }
                 })

            }
        })
    }
  }
})();