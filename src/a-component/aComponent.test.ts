/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts"/>

import 'angular';
import 'angular-mocks/ngMock';

describe('aComponent tests', () => {

  var $compile: any, $rootScope: any;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject((_$compile_: any, _$rootScope_: any) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('does the bit it should', () => {
    var element: angular.IAugmentedJQuery = $compile("<div a-component/>")($rootScope);
    $rootScope.$digest();

    // Check that the compiled element contains the templated content
    expect(element.html()).toContain('hi there');
  });

  it('does one thing', () => {
    expect(1).toEqual(1);
  });

});
