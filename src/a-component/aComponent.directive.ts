
export default (): angular.IDirective => {
  return {
    template: '<h3>hi there, from an h3</h3>',
    restrict: 'A',
    scope: {}
  }
}
