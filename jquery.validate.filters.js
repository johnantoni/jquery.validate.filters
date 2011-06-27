jQuery.validator.addMethod("accept", function(value, element, param) {
  return value.match(new RegExp("^" + param + "$"));
});

jQuery.validator.addMethod('phoneUK', function(phone_number, element) {
  return this.optional(element) || phone_number.length > 9 &&
  phone_number.match(/^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/);
  }, 'Please specify a valid phone number'
);

jQuery.validator.addMethod('mobileUK', function(phone_number, element) {
  return this.optional(element) || phone_number.length > 9 &&
  phone_number.match(/^((0|\+44)7(5|6|7|8|9){1}\d{2}\s?\d{6})$/);
  }, 'Please specify a valid mobile number'
);

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
