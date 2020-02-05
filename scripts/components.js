new WOW().init();

$(document).ready(function () {
    $('.select2-single').select2({
        placeholder: "Placeholder"
    });
});

$(document).ready(function () {
    $('.select2-multiple').select2({
        placeholder: "Placeholder"
    });
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(".range-single").ionRangeSlider({
    skin: "round",
    min: 0,
    max: 1000,
    from: 500
});

$(".range-double").ionRangeSlider({
    type: "double",
    skin: "round",
    min: 0,
    max: 1000,
    from: 200,
    to: 800
});
