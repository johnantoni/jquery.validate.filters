# add-on filters for jquery.validate

## validate.accept:

regex form filter

### options

    Only numbers:
    
    rules: {
      field: { accept: "[0-9]+" }
    }
    
    
    Only letters:
    
    rules: {
      field: { accept: "[a-zA-Z]+" }
    }

# others

* phoneUK - validate UK phone number
* mobileUK - validate UK mobile phone number
* lettersOnly - validate only letter input
* numbersOnly - validate only numeric input
* postalCode - validate standard postal code format

### notes

look at jQuery.alphanumeric to prevent number / letter / pattern input -> [here](http://www.itgroup.com.ph/alphanumeric/)

