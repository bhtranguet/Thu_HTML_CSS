$(".has-child").on('click', function (event) {
    var childs = $('.childs');
    if (childs.hasClass('hide')) {
        childs.removeClass('hide');
    } else {
        childs.addClass('hide');
    }
})
