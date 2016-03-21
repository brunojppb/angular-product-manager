(function() {

  "use strict";

  angular
    .module('productManagement')
    .controller('ProductEditCtrl', ['product', function(product) {
      var vm = this;

      vm.product = product;

      if (vm.product && vm.product.productId) {
        vm.title = "Edit: " + vm.product.productName;
      } else {
        vm.title = "New Product";
      }
    }]);

}());
