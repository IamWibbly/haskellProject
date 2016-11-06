angular.module('webapp',['ngRoute'])
  .config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/',{
    templateUrl:'views/listaLanchonetes.html',
    controller:'ListaController as lista'
  })
    .when('/lista',{
    templateUrl:'views/listaLanchonetes.html',
    controller:'ListaController as lista'
  })
    .when('/produtos',{
    templateUrl:'views/listaProdutos.html',
    controller:'ProdutosController as produtos'
  })
    .otherwise({
    redirectTo:'/'
  });
});
