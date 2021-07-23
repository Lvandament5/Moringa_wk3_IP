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


$("form").submit(function (e) {
    $.post("https://gmail.us6.list-manage.com/subscribe/post-json?u=9a1d9c90e449e2fc357dd6095&amp;id=5746e21a06", {
       FNAME: $("#mce-FNAME").val(),
       EMAIL: $("#mce-EMAIL").val()
       MMERGE2: $("#mce-MMERGE2").val()
    })
    .success(function (FNAME) {
     alert("Thank you for reaching out" + FNAME)
    });
    e.preventDefault()
  });
});