var slide = $(".slider a");
var sno = 0;
function playSlide() {
    $(slide[sno]).animate({left:"100%"}, 1000,
    function() {
        $(this).css({left:"-100%"});
    });
    sno++;
    if(sno>2) sno=0;
    $(slide[sno]).animate({left:"0%"}, 1000);
}
setInterval(playSlide, 2000);

function changeTab(t) {
    if(t=="notice"){
    $(".gallery-list").hide();
    $(".notice-list").show();
    $(".t-notice").css( { "background-color": "white","border-bottom": "1px solid white"});
    $(".t-gallery").css( { "background-color": "#aaa","border-bottom": "1px solid black"});
} else if(t=="gallery"){
    $(".gallery-list").show();
    $(".notice-list").hide();
    $(".t-gallery").css( { "background-color": "white","border-bottom": "1px solid white"});
    $(".t-notice").css( { "background-color": "#aaa","border-bottom": "1px solid black"});
}
}