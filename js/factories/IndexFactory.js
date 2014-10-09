/**
 * Factory: IndexFactory
 */

angular.module('WooferApp').factory('IndexFactory', function IndexFactory ($q, $http, $location) {
    'use strict';

    var exports = {};

    exports.messages = [];

    exports.addQuickOffer = function(){
      alert($scope.iWantTo);
    }

    return exports;
  });
