import saveCarsModule from '../save-cars/save-cars.module';

import template from './view-cars.template.html';
import { viewCarsController } from './view-cars.controller';

const viewCarsModule = angular.module('viewCarsModule', [saveCarsModule.name])
  .component('viewCars', {
    templateUrl: template,
    controller: ['carsService', viewCarsController],
    controllerAs: 'vm'
  });

export default viewCarsModule;
