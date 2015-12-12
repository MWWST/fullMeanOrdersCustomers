var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
  return {
    show: function(req, res) {

    Product.find({},function(err,results){
    	if(err){
    		res.send(err);
    	}
    	else{
    		res.json(results);
    	}
    })
    
    },

    create: function(req,res){
        console.log('in the friends controller add method',req.body.name,req.body.age);

        var newProduct= new Product({prodct:req.body.product,price:req.body.price,quantity:req.body.quantity});

        newProduct.save(function(err){
            if(err){
                console.log('something went wrong',err);
            }

            else {
                console.log('successfully added the user')
                Product.Find({},function(err,results){
                if(err){
                    res.send(err);
                }
                else{
                    res.json(results);
                }
    })
            }
        })

    },

    destroy: function (req,res){
        console.log('in the destroy server side controller method',req.params.id);

        Product.remove({_id:req.params.id},function(err){
            if(err){
                console.log(err)
            }
            else {
                Product.find({},function(err,results){
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