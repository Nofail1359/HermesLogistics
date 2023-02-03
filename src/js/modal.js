
$(document).ready(function () {
    // Modal
    $('[data-modal=request]').on('click', function () {
        $('.overlay, #request').fadeIn('slow');
        $('body').css('overflow', 'hidden');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #request').fadeOut('slow');
        $('body').css('overflow', '');
    });

    //validation

    $('.feed-form').validate({
        rules: {
            name: "required",
            phone: "required",
            checkbox: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "",
            phone: "",
            email: {
                required: "",
                email: ""
            },
            checkbox: ""

        }
    });

    let inputsTel = document.querySelectorAll('input[type="tel"]');

    Inputmask({
        "mask": "+1(999) 999-9999",
        showMaskOnHover: false
    }).mask(inputsTel);

    $('form').submit(function (e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.overlay,#request').fadeOut('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    //pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
});

