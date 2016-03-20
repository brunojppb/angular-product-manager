(function() {

  "use strict";

  angular
    .module("productManagement")
    .controller("ProductDetailCtrl", ['product', function(product) {
      var vm = this;

      // Pre-loadfeature
      vm.product = product;
      vm.title = "Product detail: " + vm.product.productName;

      if (vm.product.tags) {
        vm.product.tagList = vm.product.tags.toString();
      }
    }]);

}());
