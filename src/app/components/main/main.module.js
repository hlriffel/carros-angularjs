import { BrandsService } from '../brands/brands.service';

import carsModule from '../cars/cars.module';

import template from './main.template.html';

export default angular.module('mainModule', [carsModule.name])
  .service('brandsService', BrandsService)
  .component('mainComponent', {
    templateUrl: template,
  });
