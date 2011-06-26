jQuery.validator.addMethod("lettersOnly", function(value, element) { 
// Addon method for validating letter-only text boxes.
  return this.optional(element) || /^[a-z]+$/i.test(value); 
}, 'This field accepts letters only.');


jQuery.validator.addMethod("numbersOnly", function(value, element) {
  return this.optional(element) || /^[0-9\-\+]+$/i.test(value);
}, "Phone must contain only numbers, + and -.");


jQuery.validator.addMethod("postalCode", function(value, element) { 
// Addon method for validating postal codes. Valid formats are (X1X 1X1) or (X1X1X1) or (X1X-1X1).
  return this.optional(element) || /^[a-zA-Z][0-9][a-zA-Z](-| )?[0-9][a-zA-Z][0-9]$/i.test(value);
}, 'Please enter a valid postal code');
