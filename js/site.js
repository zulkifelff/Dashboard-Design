jQuery(function () {
    jQuery("#datepicker").datepicker({
        showButtonPanel: false
    });
});

function SearchBarBlurred() {
    $('.search-result').removeClass('opened');
}

function SearchBarFocused() {
    $('.search-result').addClass('opened');
}
