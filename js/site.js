jQuery(function () {
    jQuery("#datepicker").datepicker({
        showButtonPanel: false
    });

    jQuery('#datepicker-createload').datepicker({});


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


function sendLoaderRequest(incomingVariable) {
    debugger;
    let loaderElement = document.querySelector('#loaderHolder');
    if (incomingVariable == true) {

        loaderElement.classList.remove('hidden');
    } else {
        loaderElement.classList.add('hidden');
    }
    delete loaderElement;
}
