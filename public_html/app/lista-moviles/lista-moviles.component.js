'use strict';
angular.module('listaMoviles').component('listaMoviles',{
    templateUrl:'lista-moviles/lista-moviles.html',
    controller: function(){
         this.moviles = [
        {
          nombre: 'Nexus S',
          info: 'Esto es un Nexus 5'
        }, {
          nombre: 'Motorola XOOM™ with Wi-Fi',
          info: 'Esto es un Motorola'
        }, {
          nombre: 'MOTOROLA XOOM™',
          info: 'Esto es otro motorola'
        }
      ];
    }
});