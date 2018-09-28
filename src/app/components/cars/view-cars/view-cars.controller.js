export function viewCarsController(carsService) {

  this.filter = '';
  this.showForm = false;
  this.cars = carsService.cars;
  this.selectedCar = null;

  this.add = () => {
    this.showForm = true;
  };

  this.update = (car) => {
    if (car.id) {
      carsService.update(car.id, car);
    } else {
      car.id = this.cars.length;

      carsService.add(car);
    }

    this.showForm = false;
  };

  this.edit = car => {
    this.showForm = true;
    this.selectedCar = car;
  };

  this.delete = (index) => {
    carsService.delete(index);
  }

  this.close = () => {
    this.showForm = false;
    this.selectedCar = null;
  };

  this.carSaved = car => {
    this.update(car);
  };
}