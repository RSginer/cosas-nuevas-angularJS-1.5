'use strict';

angular.module('listaMoviles').component('listaMoviles',{
    templateUrl:'lista-moviles/lista-moviles.html',
    controller: ['$http' ,function listaMovilesController($http){
        var self = this;
        self.orden ="nombre";
        self.ordenReverse="true";
        self.vista='movil--lista';
        $http.get('lista-moviles/moviles.json').then(function(response){
           self.moviles=response.data;
        });
    }]
});