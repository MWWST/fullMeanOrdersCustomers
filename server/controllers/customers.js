var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    show: function(req, res) {

    Customer.find({},function(err,results){
    	if(err){
    		res.send(err);
    	}
    	else{
    		res.json(results);
    	}
    })
    
    },

    create: function(req,res){
     

        var newCustomer= new Customer({fullname:req.body.fullname});

        newCustomer.save(function(err){
            if(err){
                console.log('something went wrong',err);
            }

            else {
                console.log('successfully added the user')
                Customer.find({},function(err,results){
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

        Customer.remove({_id:req.params.id},function(err){
            if(err){
                console.log(err)
            }
            else {
                Customer.find({},function(err,results){
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