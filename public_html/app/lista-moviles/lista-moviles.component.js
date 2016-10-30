'use strict';

angular.module('listaMoviles').component('listaMoviles',{
    templateUrl:'lista-moviles/lista-moviles.html',
    controller: function($http){
        var self = this;

        $http.get('lista-moviles/moviles.json').then(function(response){
           self.moviles=response.data;
        });
 //        this.moviles = [
 //       {
 //         nombre: 'AAA Nexus S',
 //         info: 'Esto es un Nexus 5',
 //         fecha: new Date(2016,2,3)
 //       }, {
 //         nombre: 'Motorola XOOM™ with Wi-Fi',
 //         info: 'Esto es un Motorola',
  //        fecha: new Date(2016,2,2)
  ///      }, {
  //        nombre: 'MOTOROLA XOOM™',
  //        info: 'Esto es otro motorola',
    //      fecha: new Date(2016,2,1)
   //     }
   //   ];
        self.orden ="fecha";
    }
});