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
 //         fecha: timestamp
 //       }, {
 //         nombre: 'Motorola XOOM™ with Wi-Fi',
 //         info: 'Esto es un Motorola',
  //        fecha: timestamp
  ///      }, {
  //        nombre: 'MOTOROLA XOOM™',
  //        info: 'Esto es otro motorola',
    //      fecha: timestamp
   //     }
   //   ];
        self.orden ="fecha";
    }
});