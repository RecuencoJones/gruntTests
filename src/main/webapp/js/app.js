angular.module('gruntTests', [])

    .controller('MainCtrl', ['$scope', function($scope){

            $scope.input = null;

            $scope.submit = function(){
            console.log($scope.input);
        };
    }]);
