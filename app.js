var myApp = angular.module("myApp", []);

myApp.controller("SomeController", ['$scope', function($scope) {
    console.log("Some Controller");

    $scope.playerArray = [
        {name: "Jake", score: 0, clicks:0},
        {name: "Rick", score: 0, clicks:0},
        {name: "Mike", score: 0, clicks:0},
        {name: "Brian", score: 0, clicks:0}

    ];

    var i = 0;
    $scope.currentPlayer = $scope.playerArray[i];
    console.log($scope.currentPlayer);

    //
    //$scope.pOneAdd = function () {
    //    $scope.playertwoscore++;
    //};
    //$scope.pTwoAdd = function () {
    //    $scope.playerthreescore++;
    //};

    $scope.add = function () {
        $scope.currentPlayer.score += 5;
        $scope.currentPlayer.clicks++;
    };


    $scope.switchPlayer = function() {
        var el = i + 1;
        if((el) < $scope.playerArray.length) {
            $scope.currentPlayer = $scope.playerArray[el];
            i++;
        } else {
            $scope.currentPlayer = $scope.playerArray[0]
            i=0;
        }


    };
    //$scope.switchPlayer = function(){
    //if(x == $scope.currentPlayer1){
    //        x = $scope.currentPlayer2;
    //    } else {
    //        x == $scope.currentPlayer1;
    //    }
    //}


}]);