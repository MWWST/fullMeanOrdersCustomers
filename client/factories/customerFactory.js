storeApp.factory('customerFactory',function($http){
  var factory ={}
  var customers =[];


     // var customers = [     //  {FirstName: 'Michael',LastName:'Weitzman'},
     //  {FirstName: 'Alex',LastName:'Wilson'},
     //  {FirstName: 'Jerry',LastName:'Springer'}
      
     // ];


   
  

      factory.getCustomers = function(callback){
        $http.get('/customers').success(function(output){
        console.log('successful get',output);
         customers=output;

      //use our callback function which is in the controller function that called this and pass it our updated people variable.
      callback(customers);
    })
        callback(customers);
      }

      factory.createCustomer= function(data,callback){
        $http.post('/customers/new',data).success(function(info,output){
          customers=output;
          callback(customers);
        })
      }

      factory.destroy = function(data){
        console.log(data);
      customers.splice(data,1);
      }

      return factory;

    })