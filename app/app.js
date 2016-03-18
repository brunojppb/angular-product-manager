// Using IIFE Javascript Pattern
// Immediately-invoked Function Expression
(function(){
  "use strict"
  // Define main module
  var app = angular
              .module("productManagement",
                      ["common.services",
                        "productResourceMock"]);
}());
