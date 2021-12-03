

jQuery(function () {
    jQuery("#datepicker").datepicker({
        showButtonPanel: false
    });

    jQuery('#datepicker-createload').datepicker({});

    // jQuery(document).on("click", ".button-styling-continue", function (e)
    // {
    //     jQuery('.load-input-section-1').fadeOut('fast','linear',eventCallBack(e));
    //    jQuery('.load-input-section-2').fadeIn('slow','linear',eventCallBack(e));
    // });

});

function SearchBarBlurred() {
    $('.search-result').removeClass('opened');
}

function SearchBarFocused() {
    $('.search-result').addClass('opened');
}

function eventCallBack(e) {
console.log(e);
}
