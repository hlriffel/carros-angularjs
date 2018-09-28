import template from './save-cars.template.html';
import { saveCarsController } from './save-cars.controller';

const saveCarsModule = angular.module('saveCarsModule', [])
  .component('saveCars', {
    bindings: {
      selectedCar: '<',
      onClose: '&',
      carSaved: '&'
    },
    templateUrl: template,
    controller: ['brandsService', saveCarsController],
    controllerAs: 'vm'
  });

export default saveCarsModule;