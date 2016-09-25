angular.module('app')

  .directive('svgIcon', function(URL){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        value: '@'
      },
      template: `<svg class="icon"><use xlink:href="{{::href}}" /></svg>`,
      link: (scope) => {
        scope.href = `${URL.SVG_SPRITE}#icon-${scope.value}`;
      }
    }
  })

