console.log("connected")
$(document).ready(function () {

    $(".atext").after("<div class=\"liner1\"></div>")

    $("#server").on("mousedown", function () {
        $(".links").slideToggle(1500);
        $("#server").css("transform", "rotate(90deg)");
    });
    $("#server").on("mouseout", function () {
        $("#server").css("transform", "rotate(-90deg)")
    });

    $(window).on("scroll", function () {
        var scrolll = $(document).scrollTop();
        var ele = $("#header nav");
        var sized = $(document).width();

        var newele = $("#header .container2 .links ul li a")
        if (scrolll >= 550) {
            ele.addClass("newclss");
            newele.removeClass("atext");
            newele.addClass("colortext");
            if (sized > 985) {
                $("li .liner1").addClass("liner");
            }
            else {
                $("li .liner1").removeClass("liner");
            }
        }


        else {
            ele.removeClass("newclss");
            newele.removeClass("colortext");
            newele.addClass("atext");

            $("li .liner1").removeClass("liner");
        }


    });



    $(window).on("resize load", function () {
        var ele = $("#append");
        var sib = ele.parent().children(".div3");
        var obj = $(document).width()

        if (obj < 655) {
            ele.remove();
            sib.after("<div class=\"div2\"> TravelSense Copyright © 2020 </div>")
            // .attr("id", "div2")

        }
    })

});