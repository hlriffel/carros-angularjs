import carsModule from '../cars/cars.module';

import template from './main.template.html';

export default angular.module('mainModule', [carsModule.name])
  .component('mainComponent', {
    templateUrl: template,
  });
