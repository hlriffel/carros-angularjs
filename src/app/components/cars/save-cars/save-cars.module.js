import template from './save-cars.template.html';
import { saveCarsController } from './save-cars.controller';

const saveCarsModule = angular.module('saveCarsModule', [])
  .component('saveCars', {
    bindings: {
      selectedCar: '<'
    },
    templateUrl: template,
    controller: ['$scope', saveCarsController]
  });

export default saveCarsModule;