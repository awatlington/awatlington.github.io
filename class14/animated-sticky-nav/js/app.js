$(document).ready(function () {


    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();

        if (scrollTop > 75) {
            $('header').addClass('small-header')

        } else {
            $('header').removeClass('small-header')
        }


    })



})
