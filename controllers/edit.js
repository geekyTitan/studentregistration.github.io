myapp.controller('editControl',['$scope','$firebaseArray','$firebaseObject','$routeParams',function($scope,$firebaseArray,$firebaseObject,$routeParams){
    var ids = $routeParams.id;
    var ref = firebase.database().ref("students/"+ids);
    $scope.student = $firebaseObject(ref);


    $scope.editStudent = function(sid){
        var ref = firebase.database().ref("students/"+ids);
        ref.update({
            name:$scope.student.name,
            department:$scope.student.department,
            email:$scope.student.email,
            college:$scope.student.college,

        })
        .then(function(res){
            
            $scope.student.name = "";
            $scope.student.department="";
            $scope.student.email="";
            $scope.student.college="";

            
            

            $scope.mes1 = "Update Successfull";

             setTimeout(function(){
 
             $scope.$apply(function(){
                 $scope.mes1 = "";
             }) 
 
           },3000);

          
        })
        
    }
    

    
}])