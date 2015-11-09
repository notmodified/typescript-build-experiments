
export default (): angular.IDirective => {
  return {
    template: '<h2>hi there, from an h2</h2>',
    restrict: 'A',
    scope: {}
  }
}
