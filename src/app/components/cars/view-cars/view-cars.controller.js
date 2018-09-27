export function viewCarsController($scope, carsService) {

  $scope.filter = '';
  $scope.showForm = false;
  $scope.cars = carsService.cars;
  $scope.selectedCar = null;

  $scope.add = () => {
    $scope.showForm = true;
  };

  $scope.update = (car) => {
    if (car.id) {
      carsService.update(car.id, car);
    } else {
      car.id = $scope.cars.length;

      carsService.add(car);
    }

    $scope.showForm = false;
  };

  $scope.edit = car => {
    $scope.showForm = true;
    $scope.selectedCar = car;
  };

  $scope.delete = (index) => {
    carsService.delete(index);
  }

  $scope.$on('close',
    () => {
      $scope.showForm = false;
      $scope.selectedCar = null;
    }
  );

  $scope.$on('carSaved',
    (event, car) => {
      $scope.update(car);
    }
  );
}