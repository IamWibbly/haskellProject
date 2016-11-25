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
  .when('/cadastro',{
    templateUrl:'views/cadastroLanchonete.html',
    controller:'CadastroLanchoneteController as cadastroLanchonete'
  })
  .otherwise({
    redirectTo:'/'
  });
});
