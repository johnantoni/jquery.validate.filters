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
