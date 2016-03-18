(function() {

  "use strict"

  var app = angular.
  module("productResourceMock", ["ngMockE2E"]);

  app.run(function($httpBackend) {
    var products = [{
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

    var productUrl = "/api/products";
    $httpBackend.whenGET(productUrl).respond(products);

    var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
    $httpBackend.whenGET(editingRegex).respond(function(method, url, data){
      var product = { "productId": 0 };
      var parameters = url.split('/');
      var length = parameters.length;
      var id = parameters[length - 1];
      if (id > 0) {
        for( var i = 0; i < products.length; i++ ) {
          if(products[i].productId == id) {
            product = products[i];
            break;
          }
        }
      }
      return [200, pruduct, {}];
    });

    $httpBackend.whenPOST(productUrl).respond(function(method, url, data){
      var product = angular.fromJson(data);

      if(!product.productId) {
        // new product
        product.productId = products[products.length - 1].productId + 1;
        products.push(product);
      }
      else {
        // Update product
        for(var i = 0; i < products.length; i++) {
          if(products[i].productId === product.productId) {
            products[i] = product;
            break;
          }
        }
      }
      return [200, product, {}];
    });

    $httpBackend.whenGET(/app/).passThrough();

  });

}());
