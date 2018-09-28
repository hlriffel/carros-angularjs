export function saveCarsController(brandsService) {

  this.brands = brandsService.brands;

  this.save = () => {
    const car = {
      id: this.selectedCar.id,
      name: this.selectedCar.name,
      prodYear: this.selectedCar.prodYear,
      modelYear: this.selectedCar.modelYear,
      brand: this.selectedCar.brand,
      value: this.selectedCar.value
    };

    this.carSaved({
      car
    });

    this.selectedCar = {};
  };
}