'use strict';

angular.module('listaMoviles').component('listaMoviles',{
    templateUrl:'lista-moviles/lista-moviles.html',
    controller: function($http){
        var self = this;

        $http.get('lista-moviles/moviles.json').then(function(response){
           self.moviles=response.data;
        });

        self.orden ="fecha";
    }
});