angular.module('webapp',['ngRoute'])
  .config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/lista',{
    templateUrl:'views/listaLanchonetes.html',
    controller:'ListaController as lista'
  })
    .otherwise({
    redirectTo:'/lista'
  });
});
