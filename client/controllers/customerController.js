storeApp.controller('customersController',function($scope,customerFactory,orderFactory){
	$scope.customers=[]


	//retreive customers

	customerFactory.getCustomers(function(data){
		$scope.customers=data;
	})

	$scope.createCustomer=function() {

		console.log($scope.newCustomer);


		var newCustomer = {fullname:$scope.newCustomer.fullname}


		customerFactory.createCustomer(newCustomer,
			function(data){
				console.log('data in add customer controller',data)
				customerFactory.getCustomers(function(data){
					$scope.customers=data;
					$scope.newCustomer ={}
				})
			});
		
		//perhaps get customers again here?

	}

	$scope.destroyCustomer = function(customer){
		var deleteCustomer = $scope.customers.indexOf(customer);
		customerFactory.destroy(deleteCustomer);
	}
})