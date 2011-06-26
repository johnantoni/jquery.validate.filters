// addon to jquery.validate
// 
// options
// 
//  Only numbers:
//  
//  rules: {
//    field: { accept: "[0-9]+" }
//  }
//  
//  Only letters
//  
//  rules: {
//    field: { accept: "[a-zA-Z]+" }
//  }

jQuery.validator.addMethod("accept", function(value, element, param) {
  return value.match(new RegExp("^" + param + "$"));
});
