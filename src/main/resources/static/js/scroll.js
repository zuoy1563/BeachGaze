$(document).ready(function(){
    $(window).scroll(function() {
        var top = $("#page").offset().top; //get top position
        var scrollTop = $(window).scrollTop();  //get current position
        if(scrollTop > top){                 //if scroll to this position then execute
            $(".gtco-nav").addClass("active");
        }else{
            $(".gtco-nav").removeClass("active");
        }
    });
});