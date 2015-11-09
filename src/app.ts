/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts"/>

import 'angular';
import 'angular-ui-bootstrap';

import AComponent from './a-component/aComponent.directive';

angular.module('app', ['ui.bootstrap'])
  .directive('aComponent', AComponent);
