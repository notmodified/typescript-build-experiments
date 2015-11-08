/// <reference path="../typings/angularjs/angular.d.ts"/>

import 'angular';

import AComponent from './a-component/aComponent.directive';

angular.module('app', [])
  .directive('aComponent', AComponent);
