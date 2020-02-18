$('.mobile-btn').on('click', function () {
    $('.mobile-btn') .toggleClass('show-mobile-btn')
    $('ul') .toggleClass('show-menu')
});

$('.menu__item').on('click', function () {
    $('.mobile-btn') .removeClass('show-mobile-btn')
    $('ul') .removeClass('show-menu')
});

