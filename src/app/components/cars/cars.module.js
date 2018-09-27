import viewCarsModule from './view-cars/view-cars.module';
import { CarsService } from './cars.service';

const carsModule = angular.module('carsModule', [viewCarsModule.name])
  .service('carsService', [CarsService]);

export default carsModule;