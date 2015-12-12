storeApp.controller('ordersController',function($scope,customerFactory,orderFactory,productFactory){
	$scope.orders=[]


	//retreive customers

	orderFactory.getOrders(function(data){
		$scope.orders=data;
	})

	productFactory.getProducts(function(data){
		$scope.products=data;
	})

	customerFactory.getCustomers(function(data){
		$scope.customers=data;
	})

	$scope.createOrder=function(customer){


		orderFactory.createOrder(customer,function(data){
			console.log('callback results',data);
			orderFactory.getOrders(function(data){
				$scope.orders=data;
				$scope.newOrder={};
			})
		});
		

		//we can insert the product id, customer id and customer into ther orders deb
	

	}

	$scope.destroyOrder = function(order){
		var deleteOrder = order._id;
		orderFactory.destroy(deleteOrder);

		orderFactory.getOrders(function(data){
			$scope.orders=data;
		})
	}
})