myapp.controller('listControl',['$scope','$firebaseArray',function($scope,$firebaseArray){
    
    var ref = firebase.database().ref("students");

    $scope.data = $firebaseArray(ref);

    $scope.deleteStudent = function(stud){
        $scope.data.$remove(stud).then(function(result){
            console.log("stuent deleted successfully")
            $scope.msg = "Sudent deleted successfully"

           setTimeout(function(){

            $scope.$apply(function(){
                $scope.msg = "";
            })
                
            },3000);
        })
    }
    console.log($scope.data);
    
}])