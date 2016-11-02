angular.module('webapp')
  .controller('ListaController',ListaController);

function ListaController(){
  vm = this
  vm.mensagem = "teste";

  vm.listaLanchonetes = [
    {nome:'Lanchonete1',localizacao:'Fatec Rubens Lara'},
    {nome:'Lanchonete2',localizacao:'Fatec Rubens Lara'},
    {nome:'Lanchonete3',localizacao:'Fatec Rubens Lara'},
    {nome:'Lanchonete27',localizacao:'Fatec Praia Grande'},
    {nome:'Lanchonete65',localizacao:'Fatec São José dos Campos'},
  ]
}
