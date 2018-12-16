myapp.controller('homeControl',['$scope','$firebaseArray',function($scope,$firebaseArray){
    $scope.onRegister = function(){

        var ref = firebase.database().ref('students');

        $firebaseArray(ref).$add($scope.data)
          .then(function(ref){
            $scope.data.name = '';
            $scope.data.department = '';
            $scope.data.email = '';
            $scope.data.college = '';
               
            console.log("Student added successfully")
            $scope.message = "Student added successfully"

           setTimeout(function(){

            $scope.$apply(function(){
                $scope.message = "";
            }) 

          },3000);
        })
        console.log($scope.data.name);
        console.log($scope.data.department);
        console.log($scope.data.email);
        console.log($scope.data.college);
    }
}])