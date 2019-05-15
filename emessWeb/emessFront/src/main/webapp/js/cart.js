$(function(){
    chkmon()
    $('.all_selected').click(function(){
        var is_check = $(this).data('is_check');
        if(is_check){
            $(".cby-toolbar").css({right:270});
            $(".cby-tbar-tab-cart").addClass("cby-tbar-tab-selected");
        }else{
            $(".cby-toolbar").css({right:0});
            $(".cby-tbar-tab-cart").removeClass("cby-tbar-tab-selected");
        }
    });


    $("[data-toggle='tooltip'],[data-toggle='modal']").tooltip();

    $(".plante .seat").on("change",function(){
        var option = $(this).children("option:selected").val();
        $(".money1,.money2,.money3,.money4,.money5,.money6,.money_sum_1,.money_sum_2,.money_sum_3,.money_sum_4,.money_sum_5,.money_sum_6").hide();
        $(".money"+option+",.money_sum_"+option).show();
    });


    $(".cby-tbar-tab-cart").click(function(event){
        var ins = $(this).hasClass("cby-tbar-tab-selected");
        if(ins){
            $(".cby-toolbar").css({right:0});
            $(this).removeClass("cby-tbar-tab-selected");
        }else{
            $(".cby-toolbar").css({right:270});
            $(this).addClass("cby-tbar-tab-selected");
        }
        var num = $(".tab-sub").text();

        if(num > 0) $(".cby-tbar-panel-content").removeClass('no_cart');
        else $(".cby-tbar-panel-content").addClass('no_cart');


        $(document).one("click", function (){
            $(".cby-toolbar").css({right:0});
            $(".cby-tbar-tab-cart").removeClass("cby-tbar-tab-selected");
            if(num > 0) $(".cby-tbar-panel-content").removeClass('no_cart');
            else $(".cby-tbar-panel-content").addClass('no_cart');
        });
        event.stopPropagation();
    });

    $(".z-cby-toolbar-open,.wechat_title dt,.all_selected,.delet_account,.mtimg,.flex_leaflet,.add_cart_icon,.add_to_cart").on('click',function (event){
        event.stopPropagation();
    });

    $(".J-trigger").hover(function(){
        $(this).addClass("cby-tbar-tab-hover");
        if($(this).hasClass("cby-tbar-cs")){
           $(".wx-right-bar").show(300);
        }
    },function(){
        $(this).removeClass("cby-tbar-tab-hover");
            $(".wx-right-bar").hide();
    });
    $(".close-panel").click(function(){
        $(".cby-tbar-tab-cart").click();
    });


    function autoHeight(){
        var w = document.documentElement.clientHeight;
        var h = $(".cby-tbar-panel-header").outerHeight();
        var f = $(".cby-tbar-panel-footer").outerHeight();
        $(".cby-tbar-panel-content").height(w-h-f);
    }
    autoHeight();

    $(window).resize(function(){
        autoHeight();
    });

    $(".cby-tbar-tab-top").click(function(){
        $("html,body").animate({scrollTop:0});
    });

    $(".btn-clear").click(function(){
        $(this).parent().siblings("input").val("");
    });



    $('.popMask').on('click',function(){
        $('.close ').click();
    });
    $(window).keydown(function(e){
        if($('body div').hasClass('popMask')) if(e.which == 27) $('.close ').click();
    });
    $('body').delegate('.close','click',function(){
        $('#myTab li').removeClass('active');
        $('#myTab li:first').addClass('active');
    });


    $('.batchsearch a').click(function(){
        var rel = $(this).attr('rel');
        $('.search_account').attr('data-ischeck',0);
        if(rel == 'show')
        {
            $('textarea.search_account').attr('data-ischeck',1);
            $(this).siblings('.multiple_account').addClass('on');
            $(this).attr('rel','hide').html('&#xe6c0;');
        }
        else
        {
            $('input.search_account').attr('data-ischeck',1);
            $(this).siblings('.multiple_account').removeClass('on');
            $(this).attr('rel','show').html('&#xe606;');
        }
    });
    $('.batchsearch').mouseover(function(){
        $(this).find('.multiple_account').height(76);
    });
    $(document).click(function (){
        $('.batchsearch').find('.multiple_account').height(38);
    });

    $(".batchsearch").click(function (event){
        event.stopPropagation();
    });

});