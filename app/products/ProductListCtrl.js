(function() {

  "use strict"
  angular
    .module("productManagement")
    .controller("ProductListCtrl", ['$log', ProductListCtrl]);

  function ProductListCtrl($log) {
    var vm = this;
    vm.products = [{
      "productId": 1,
      "productName": "Bread",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2009",
      "cost": 9.00,
      "price": 19.95,
      "category": "garden",
      "imageUrl": "https://openclipart.org/image/800px/svg_to_png/244260/rollbread.png"
    }, {
      "productId": 2,
      "productName": "Croassant",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2009",
      "cost": 3.00,
      "price": 12.95,
      "category": "bakery",
      "imageUrl": "https://openclipart.org/image/800px/svg_to_png/244259/croissant.png"
    }];

    vm.showImage = false;
    vm.toggleImage = function(){
      $log.info("Toggle: " + vm.showImage);
      vm.showImage = !vm.showImage;
    }
  }

}());
