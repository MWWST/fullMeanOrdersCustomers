//ORDER FACTORY
    storeApp.factory('orderFactory',function($http){
     var orders = [
      {CustomerFirst: 'Michael',CustomerLast:'Weitzman',Product:'Laptop',Price:1900,Quantity:2, Date: '11/15/15'},
      {CustomerFirst: 'Jerry',CustomerLast:'Springer',Product:'Shoes',Price:200,Quantity:2, Date: '11/15/15'},
      {CustomerFirst: 'Alex',CustomerLast:'Wilson',Product:'Keyboard',Price:99,Quantity:2, Date: '11/15/15'}
     
     ];


   
      var factory ={};

      factory.getOrders = function(callback){
        $http.get('/orders').success(function(output){
          orders=output;
          callback(orders);
        })
      }

      factory.createOrder= function(data,callback){
        console.log('in the createOrder order factory',data);
        $http.post('orders/new',data).success(function(info,output){
          orders=output;
          callback(orders);
        })
      }

      factory.destroy = function(data,callback){
        console.log('destroy factory', data);
         $http.post('orders/destroy',{id:data}).success(function(info,output){
          // console.log('successfully deleted',output);

        })
      }

      return factory;

    })