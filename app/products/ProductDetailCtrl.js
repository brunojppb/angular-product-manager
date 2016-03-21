(function() {

  "use strict";

  angular
    .module("productManagement")
    .controller("ProductDetailCtrl", ['product', 'productService', function(product, productService) {
      var vm = this;

      // Pre-loadfeature
      vm.product        = product;
      vm.title          = "Product detail: " + vm.product.productName;
      vm.marginPercent  = productService.calculateMarginPercent(vm.product.price, vm.product.cost);

      if (vm.product.tags) {
        vm.product.tagList = vm.product.tags.toString();
      }
    }]);

}());
