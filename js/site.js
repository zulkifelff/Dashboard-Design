jQuery(function () {
    jQuery("#datepicker").datepicker({
        showButtonPanel: false
    });

    jQuery('#datepicker-createload').datepicker({});


    jQuery(document).on("click", ".button-styling-continue", function (e) {
        const weight = $("#weight").val();
        const end_datetime = $("#id_end_datetime").val();
        const truck_type = $("#id_truck_type").val();
        if (weight === "" || end_datetime === "" || end_datetime > 24 || truck_type === "") {
            jQuery('.first-form').find('input').each(function () {

                if ($(this).prop('required')) {
                    console.log('Is Required');
                    let currentElement = $(this);
                    let currentElementValue = currentElement.val();
                    if (currentElementValue.length <= 0) {
                        currentElement.addClass('not-filled');
                    } else if (currentElementValue > 24) {
                        currentElement.addClass('not-filled');
                    }
                } else {
                    console.log('Not Required');
                }

            })
        } else {
            jQuery('.load-input-section-1').fadeOut('fast', 'linear', eventCallBack(e));
            jQuery('.load-input-section-2').fadeIn('slow', 'linear', eventCallBack(e));
        }
    });


    jQuery(document).on("click", ".button-styling-back", function (e) {
        jQuery('.load-input-section-1').fadeIn('fast', 'linear', eventCallBack(e));
        jQuery('.load-input-section-2').fadeOut('slow', 'linear', eventCallBack(e));
    });

});

function SearchBarBlurred() {
    // $('.search-result').removeClass('opened');
}

function SearchBarFocused() {
    // $('.search-result').addClass('opened');
}

function eventCallBack(e) {
    console.log(e);
}

/**
 * Function that will show and hide the loader
 * @param incomingVariable Boolean
 */
function sendLoaderRequest(incomingVariable) {
    let loaderElement = document.querySelector('#loaderHolder');
    if (incomingVariable == true) {

        loaderElement.classList.remove('hidden');
    } else {
        loaderElement.classList.add('hidden');
    }
    delete loaderElement;
}
