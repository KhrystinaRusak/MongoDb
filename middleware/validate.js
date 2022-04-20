validate.init({
    // classes and Selectors
    selector: '[data-validate]',
    fieldClass: 'error',
    errorClass: 'error-message',

    // messages
    messageValueMissing: 'Please fil out this filed.',
    messageValueMissingCheckbox: 'This is field is required.',
    messageValueMissingRadio: 'Please select a value.',
    messageValueMissingSelect: 'Please select a value.',
    messageValueMissingSelectMulti: 'Please select at least one value.',
    messageValueMisMismatchEmail: 'Please enter an email address.',


    // form submission
    disableSubmit: false,
    onSubmit: function(form, fileds) {},

    // callbacks
    beforeShowError: Function(field, error) {},
    afterShowError: function(field, error) {},
    beforeRemoveError: function(field) {},
    afterRemoveError: funciotn(field) {},

});

import ('/path/to/validate.polyfills.min.js')
.then(function() {
    validate.init();
});