$(function() {
    $("[data-slither='slither']").hover(function() {
        $(this).find("[pane-slither='slither-pane']").show();
    }, function() {
        $(this).find("[pane-slither='slither-pane']").hide();
    });
    $("[pane-slither='slither-pane'] a").click(function() {
        $(this).parent("[pane-slither='slither-pane']").hide();
    });
	if($('.bore').length > 0){
        var boreTop = $('.bore').offset().top;
    }
    var boreHei = $("[data-type='locate']").height();
    $(window).scroll(function() {
        var winH = $(window).scrollTop();
        if (winH > boreTop - boreHei) {
            $("[data-type='locate']").addClass("locate");
            $(".scrolltopf").addClass("smallnav");
        } else {
            $("[data-type='locate']").removeClass("locate");
            $(".scrolltopf").removeClass("smallnav");
        }
    });
    $(".J_infoTrigger").hover(function() {
        $(this).css({ "z-index": "10" });
        $(this).find(".popover").show();
    }, function() {
        $(this).find(".popover").hide();
        $(this).css({ "z-index": "1" });
    });





});
