import 'angular';
import './../scss/styles.scss';

import mainModule from './components/main/main.module.js';

angular
  .module('carrosApp', [mainModule.name]);
