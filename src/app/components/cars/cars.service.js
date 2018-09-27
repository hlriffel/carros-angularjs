export class CarsService {

  constructor() {
    this.cars = [
      {
        id: 0,
        name: 'Fiesta',
        prodYear: 2018,
        modelYear: 2019,
        brand: 'Ford',
        value: 50000
      },
      {
        id: 1,
        name: 'Fusca',
        prodYear: 1993,
        modelYear: 1993,
        brand: 'VW',
        value: 4500
      },
      {
        id: 2,
        name: 'Fox',
        prodYear: 2017,
        modelYear: 2018,
        brand: 'VW',
        value: 42500.5
      }
    ];
  }

  add(car) {
    this.cars.push(car);
  }

  update(index, car) {
    this.cars[index] = car;
  }

  delete(index) {
    if (confirm('Deseja excluir o carro selecionado?')) {
      this.cars.splice(index, 1);
    }
  }
}