(function() {

  "use strict";

  angular
    .module('productManagement')
    .controller('ProductEditCtrl', ['product', '$log', '$state', 'toastr', function(product, $log, $state, toastr) {
      var vm = this;

      vm.product = product;

      $log.info("Product: " + vm.product.productName);

      if (vm.product && vm.product.productId) {
        vm.title = "Edit: " + vm.product.productName;
      } else {
        vm.title = "New Product";
      }

      vm.open = function($event) {
        // $event.preventDefault();
        // $event.stopPropagration();

        vm.opened = !vm.opened;
      };

      vm.submit = function(isValid) {
        if(isValid) {
          vm.product.$save(function(data) {
            toastr.success('Product saved', 'Go in peace!');
          });
        } else {
          toastr.error('fix it before save', 'OMG! there is an error');
        }
      };

      vm.cancel = function() {
        $state.go('productList');
      };

      vm.addTags = function(tags) {
        if(tags) {
          var arr = tags.split(',');
          vm.product.tags = vm.product.tags ? vm.product.tags.concat(arr) : arr;
          vm.newTags = '';
        } else {
          alert('Please enter one or more tags separated by commas');
        }
      }

      vm.removeTag = function(index) {
        vm.product.tags.splice(index, 1);
      }

    }]);

}());
