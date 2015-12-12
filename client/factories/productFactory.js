storeApp.factory('productFactory',function($http){
  var factory ={}
  var products =[];


     // var products = [     //  {FirstName: 'Michael',LastName:'Weitzman'},
     //  {FirstName: 'Alex',LastName:'Wilson'},
     //  {FirstName: 'Jerry',LastName:'Springer'}
      
     // ];
      factory.getProducts = function(callback){
        $http.get('/products').success(function(output){
        console.log('successful get',output);
         products=output;

      //use our callback function which is in the controller function that called this and pass it our updated people variable.
      callback(products);
    })
        callback(products);
      }

      factory.createProduct= function(data,callback){
        $http.post('/products/new',data).success(function(info,output){
          products=data;
          callback(products);
        })
      }

      factory.destroy = function(data){
        console.log(data);
      products.splice(data,1);
      }

      return factory;

    })