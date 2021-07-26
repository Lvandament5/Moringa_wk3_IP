

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });
});
$(document).ready(function(){
    $(":button").click(function(){
     alert("you clicked the button");   
    })
});


$(document).ready(function () {
    $("#tog").click(function () {
        $('#tog').toggle('5000');
        $('#togtext').toggle('5000');
    });
    $("#togtext").click(function () {
        $('#tog').toggle('5000');
        $('#togtext').toggle('5000');
    });
});

$(document).ready(function(){
    $("#dtog").click(function(){
        $('#dtog').toggle('5000');
        $('#dtogtext').toggle('5000');
    });
    $("#dtogtext").click(function(){
        $('#dtog').toggle('5000');
        $('#dtogtext').toggle('5000');
    });
        
});

$(document).ready(function(){
    $("#pmtog").click(function(){
        $('#pmtog').toggle('5000');
        $('#pmtogtext').toggle('5000');
    });
    $("#pmtogtext").click(function(){
        $('#pmtog').toggle('5000');
        $('#pmtogtext').toggle('5000');
    });
        
});
// $("form").submit(function (e) {
//     $.post("https://gmail.us6.list-manage.com/subscribe/post-json?u=9a1d9c90e449e2fc357dd6095&amp;id=5746e21a06", {
//         FNAME: $("#mce-FNAME").val()
//         EMAIL: $("#mce-EMAIL").val()
//        MMERGE2: $("#mce-MMERGE2").val()
//     })
//         .success(function (FNAME) {
//             alert("Thank you for reaching out" + FNAME)
//         });
//     e.preventDefault()
// });