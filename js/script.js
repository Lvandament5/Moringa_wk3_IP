

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

$(document).ready(function () {
    $("#dtog").click(function () {
        $('#dtog').toggle('5000');
        $('#dtogtext').toggle('5000');
    });
    $("#dtogtext").click(function () {
        $('#dtog').toggle('5000');
        $('#dtogtext').toggle('5000');
    });

});

$(document).ready(function () {
    $("#pmtog").click(function () {
        $('#pmtog').toggle('5000');
        $('#pmtogtext').toggle('5000');
    });
    $("#pmtogtext").click(function () {
        $('#pmtog').toggle('5000');
        $('#pmtogtext').toggle('5000');
    });

});
// Portfolio hover

$("#project1").hover(myenter, myleave);

function myenter() {
    console.log("mouse in");
    $("#hover1").show(function () {
        $("#hover1").append("Movie site")
    });
};

function myleave() {
    console.log("mouse out");
    $("#hover1").hide(function () {
        $("#hover1").empty()
    });
};
$("#project2").hover(myenter2, myleave2);
function myenter2() {
    console.log("mouse in");
    $("#hover2").show(function () {
        $("#hover2").append("Bright site")
    });
};
function myleave2() {
    console.log("mouse out");
    $("#hover2").hide(function () {
        $("#hover2").empty()
    });
};

$("#project3").hover(myenter3, myleave3);
function myenter3() {
    console.log("mouse in");
    $("#hover3").show(function () {
        $("#hover3").append("Ontario security")
    });
};
function myleave3() {
    console.log("mouse out");
    $("#hover3").hide(function () {
        $("#hover3").empty()
    });
};

$("#project4").hover(myenter4, myleave4);
function myenter4() {
    console.log("mouse in");
    $("#hover4").show(function () {
        $("#hover4").append("Grey")
    });
};
function myleave4() {
    console.log("mouse out");
    $("#hover4").hide(function () {
        $("#hover4").empty()
    });
};
$("#project5").hover(myenter5, myleave5);
function myenter5() {
    console.log("mouse in");
    $("#hover5").show(function () {
        $("#hover5").append("Elena")
    });
};
function myleave5() {
    console.log("mouse out");
    $("#hover5").hide(function () {
        $("#hover5").empty()
    });
};
$("#project6").hover(myenter6, myleave6);
function myenter6() {
    console.log("mouse in");
    $("#hover6").show(function () {
        $("#hover6").append("Buttons")
    });
};
function myleave6() {
    console.log("mouse out");
    $("#hover6").hide(function () {
        $("#hover6").empty()
    });
};
$("#project7").hover(myenter7, myleave7);
function myenter7() {
    console.log("mouse in");
    $("#hover7").show(function () {
        $("#hover7").append("Burned")
    });
};
function myleave7() {
    console.log("mouse out");
    $("#hover7").hide(function () {
        $("#hover7").empty()
    });
};
$("#project8").hover(myenter8, myleave8);
function myenter8() {
    console.log("mouse in");
    $("#hover8").show(function () {
        $("#hover8").append("Giraffe")
    });
};
function myleave8() {
    console.log("mouse out");
    $("#hover8").hide(function () {
        $("#hover8").empty()
    });
};