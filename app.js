(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.food = "";
  $scope.commentFood = "";

  $scope.chooseMessage = function () {
    if (foodCount ($scope.food) < 4) {
      if (foodCount ($scope.food) == 0) {
        $scope.commentFood = "Please enter data first";
      }
      else {
        $scope.commentFood = "Enjoy!";
      }
    } else {
      $scope.commentFood = "Too Much!";
    }
  };

  function foodCount (string) {
    var foodSplitter = string.split(',');
    var foodNumber = foodSplitter.length;

    foodNumber = checkEmpty(foodSplitter, foodNumber);
    return foodNumber;
  };

  function checkEmpty (foodArray, number) {
    for (var i = 0; i < foodArray.length; i++) {
      if (foodArray[i].trim() === '') {
        number-=1;
      }
    }

    return number;
  };

};

})();
