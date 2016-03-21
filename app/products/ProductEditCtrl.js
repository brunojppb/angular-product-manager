(function() {

  "use strict";

  angular
    .module('productManagement')
    .controller('ProductEditCtrl', ['product', '$log', function(product, $log) {
      var vm = this;

      vm.product = product;
      $log.info("Product: " + vm.product.productName);

      if (vm.product && vm.product.productId) {
        vm.title = "Edit: " + vm.product.productName;
      } else {
        vm.title = "New Product";
      }
    }]);

}());
