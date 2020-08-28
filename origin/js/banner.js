; (function () {
    var $banner_wrap = $("#banner-wrap");
    var $banner_box = $("#banner_box");
    var $banner_li = $banner_box.find("li");
    var $leftbtn = $("#leftbtn");
    var $rightbtn = $("#rightbtn");
    var $cirli = $("#cir").find("li");
    var idx = 0;
    var lock = true;
    $banner_li.hide();
    $banner_li.eq(0).show();
    $leftbtn.click(function () {
        if (!lock) {
            return;
        }
        lock = false;
        $banner_li.eq(idx).fadeOut();
        idx--;
        if (idx < 0) {
            idx = $banner_li.length - 1;
        }
        $banner_li.eq(idx).fadeIn(() => {
            lock = true;
        });
        change()
    })
    $rightbtn.click(function () {
        if (!lock) {
            return;
        }
        lock = false;
        $banner_li.eq(idx).fadeOut();
        idx++;
        if (idx > $banner_li.length - 1) {
            idx = 0;
        }
        $banner_li.eq(idx).fadeIn(() => {
            lock = true;
        });
        change()
    })
    $cirli.each(function (index) {
        $(this).mouseenter(function (event) {
            if (index === idx) {
                return;
            }
            if (index > idx) {
                $banner_li.eq(idx).fadeOut();
                idx = index;
                $banner_li.eq(idx).fadeIn();
                change()
            }
            if (index < idx) {
                $banner_li.eq(idx).fadeOut();
                idx = index;
                $banner_li.eq(idx).fadeIn();
                change()
            }
        })
    })
    change();
    function change() {
        $cirli.each(function () {
            $cirli.css("background", "rgba(14, 13, 13,.5)");
        })
        $cirli.eq(idx).css("background", "rgba(50, 8, 235, 0.5)");
    }
    var timer = setInterval(function () {
        $rightbtn.trigger("click");
    }, 2000);
    $banner_wrap.mouseenter(() => {
        clearInterval(timer);
    })
    $banner_wrap.mouseleave(() => {
        timer = setInterval(function () {
            $rightbtn.trigger("click");
        }, 2000);
    })
})();