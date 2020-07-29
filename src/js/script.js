$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('bg-black-transparent');
        } else {
            $('.navbar').removeClass('bg-black-transparent');
        }
    })
})

