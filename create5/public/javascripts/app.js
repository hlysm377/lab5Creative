angular.module('profile', [])
  .controller('MainCtrl', [
    '$scope','$http',
    function($scope,$http) {
      $scope.profiles = [];
      $scope.create = function(profile) {
        return $http.post('/profiles', profile).success(function(data){
          $scope.profiles.push(data);
        });
      };
      $scope.addProfile = function() {
	if($scope.formContent === '' || $scope.nameContent === '') {return;}
	console.log("In addProfile with "+$scope.nameContent);
	$scope.create({
	  name: $scope.nameContent,
	  status: $scope.formContent,
	  pic: $scope.picContent
	});
	//var newObject = {title:$scope.formContent,upvotes:0};
	//$scope.comments.push(newObject);
	$scope.formContent = "";
	$scope.nameContent = "";
	$scope.picContent = "";
      };
      
      $scope.delete = function(profile) {
        $http.delete('/profiles/' + profile._id )
          .success(function(data){
            console.log("delete worked");
          });
        $scope.getAll();
      };

      $scope.getAll = function() {
        return $http.get('/profiles').success(function(data){
          console.log("In getAll");
	  angular.copy(data, $scope.profiles);
        });
      };
      console.log("before call");
      $scope.getAll();
      console.log("after call");
    }
  ]);

