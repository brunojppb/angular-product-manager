(function() {
  "use strict";
  var app = angular.module("productManagement", ["common.services",
    "ui.router", "ui.mask", "ngAnimate", "ngTouch", "ui.bootstrap", "toastr", "ngMessages",
    "productResourceMock"
  ]);


  app.config(["$stateProvider", "$urlRouterProvider",
      function($stateProvider, $urlRouterProvider) {

        // Default url
        // It will redirect the default route
        // To this
        $urlRouterProvider.otherwise("/");

        $stateProvider
          // Home
          .state("home",{
            url: "/",
            templateUrl: "app/welcomeView.html"
          })
          // Products
          .state("productList", {
            url: "/products",
            templateUrl: "app/products/productListView.html",
            controller: "ProductListCtrl as vm"
          })



          .state("productEdit", {
            abstract: true,
            url: "/products/edit/:productId",
            templateUrl: "app/products/productEditView.html",
            controller: "ProductEditCtrl as vm",
            // Retrive data and inject in the controller
            resolve: {
              productResource: "productResource",
              product: function(productResource, $stateParams) {
                var productId = $stateParams.productId;
                return productResource.get(
                  {productId: productId}).$promise;
              }
            }
          })
          .state("productEdit.info", {
            url: "/info",
            templateUrl: "app/products/productEditInfoView.html"
          })
          .state("productEdit.price", {
            url: "/price",
            templateUrl: "app/products/productEditPriceView.html"
          })
          .state("productEdit.tags", {
            url: "/tags",
            templateUrl: "app/products/productEditTagsView.html"
          })


          .state("productDetail", {
            url: "/products/:productId",
            templateUrl: "app/products/productDetailView.html",
            controller: "ProductDetailCtrl as vm",
            // Retrive data and inject in the controller
            resolve: {
              productResource: "productResource",
              product: function(productResource, $stateParams) {
                var productId = $stateParams.productId;
                return productResource.get(
                  {productId: productId}).$promise;
              }
            }
          });
      }
    ]

  );
}());
