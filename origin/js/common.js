;(function () {
    var $header_li = $("#header_ul").find("li");
    var $list = $header_li.find("#list");
    $header_li.each(function (index) {
        $header_li.eq(index + 1).mouseenter(function () {
            $header_li.eq(index + 1).css("background", "#fff");
            $list.eq(index).show().css("background", "#fff");
        })
        $header_li.eq(index + 1).mouseleave(function () {
            $header_li.eq(index + 1).css("background", "#f2f2f2");
            $list.eq(index).hide();
        })
        var $nav = $("#nav-wrap");
        var $nav_item = $nav.find(".nav-item");
        var $bigbox = $nav.find(".bigbox");
        $nav_item.each(function (index) {
            $nav_item.eq(index + 1).mouseenter(function () {
                $bigbox.eq(index).show();
            })
            $bigbox.eq(index).mouseenter(function () {
                $bigbox.eq(index).show();
            })
        })
        $nav_item.each(function (index) {
            $nav_item.eq(index + 1).mouseleave(function () {
                $bigbox.eq(index).hide();
            })
            $bigbox.eq(index).mouseleave(function () {
                $bigbox.eq(index).hide();
            })
        })
    })
    var $nav_dh = $("#nav_dh");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 140) {
            $nav_dh.css({ position: "fixed", top: 0 });
        } else {
            $nav_dh.css({ position: "relative", top: 0 })
        }
    })
})();