

$(document).ready(function () {

    // header js code starts

    $('.landing-page .cntr-cont .main-optn .app-logo').on('click', function () {
        let info = $(this).attr('data-info');
        $(this).siblings('.app-logo').each(function (index, item) {
            if ($(item).hasClass('active')) {
                $(item).removeClass('active');
            }
        })
        $(this).addClass('active');

        $('.landing-page .cntr-cont').children('.sub.options').each(function (index, item) {
            if ($(item).hasClass('active')) {
                $(item).removeClass('active');
            }
        });
        $('.landing-page .cntr-cont').children('.sub.options').each(function (index, item) {
            if ($(item).attr('data-info') == info) {
                $(item).addClass('active');
            }
        });

        // $(this).siblings('.options').addClass('show');
    })

    $('header .options .profile-pic .outer-pp').on('click', function () {
        $(this).siblings('.logout-popup').fadeToggle();
        $(this).parents('.profile-pic').toggleClass('active');
    })

    $('header .options .profile-pic .logout-popup .cls-btn').on('click', function () {
        $(this).parents('.profile-pic').removeClass('active');
        $(this).parents('.logout-popup').fadeOut();
    })


    $(document).mouseup(function (e) {
        var container = $("header .options .profile-pic .logout-popup");
        if (!$('header .options .profile-pic img').is(e.target) && !$('header .options .profile-pic').is(e.target) && !container.is(e.target) && container.has(e.target).length === 0) {
            container.parents('.profile-pic').removeClass('active');
            container.fadeOut();
        }
    });


    // header js code ends 


})

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        //  document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('preloader').style.display = "none";
        }, 1000);
    }
}