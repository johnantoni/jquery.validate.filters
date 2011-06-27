// jquery example to choose at least 1 checkbox but no more than 3

$.validator.addMethod("checkboxes", function(value, element) {
  return $('input[type=checkbox]:checked').length < 4;
});

// define validation
var validateForm = myForm.validate({
  ignore: ".ignore",
  errorElement: "strong",
  rules: {
    'select-checkbox[]' : { checkboxes: true }
  },
  messages: {
    title: 
      { required: "Please enter a title" },
    "select-checkbox[]":
      { required: "Please select up to 3 checkboxes",
        checkboxes: "Please select up to 3 checkboxes"},
    radiobuttons: 
      { required: "Please choose the radio button you want" },
    "selectbox-selected":
      { required: "At least 1 checkbox must be selected"}
  },
  errorPlacement: function(error, element) {
    if (element.is(":radio"))
      { error.appendTo(element.parents().eq(1).find(".error-item")); }
    else if (element.is(":checkbox"))
      { error.appendTo(element.parents().eq(1).find(".error-item")); }
    else
      { error.appendTo(element.parent()); }
   }
});
