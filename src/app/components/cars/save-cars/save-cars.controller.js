export function saveCarsController($scope) {

  $scope.save = () => {
    const car = {
      id: this.selectedCar.id,
      name: this.selectedCar.name,
      prodYear: this.selectedCar.prodYear,
      modelYear: this.selectedCar.modelYear,
      brand: this.selectedCar.brand,
      value: this.selectedCar.value
    };

    $scope.$emit('carSaved', car);

    this.selectedCar = {};
  };
}