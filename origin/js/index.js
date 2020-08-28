; (function () {
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
    var $brank_box = $("#brank_box");
    for (var i = 0; i < 36; i++) {
        var $img = $('<img src="../resource/images/brank_img.png" alt="">');
        var $a = $("<a></a>")
        $brank_box.append($a.append($img));
    }
    var html = '';
    var $produce_wrap = $("#produce-wrap");
    $.ajax({
        type: "get",
        url: "/server/data/a.json",
        dataType: "json",
        success: function (data) {
            data.res.forEach(function (value) {
                html += `
          <div class="card mb-3" style="max-width: 540px;">
            <a href="./detail.html?id=${value.id}">
                <img src="${value.img}" class="card-img" alt=""> 
            </a>
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.slogan}</p>
                <p class="card-text">
                    <small class="text-muted">${value.discount}</small>
                </p>
            </div>
          </div>
        `
            })
            $produce_wrap.html(html);
        }
    })
    var $boutique_wrap = $("#boutique-wrap");
    var html2 = '';
    $.ajax({
        type: "get",
        url: "/server/data/b.json",
        dataType: "json",
        success: function (info) {
            info.res.forEach(function (item) {
                html2 += `
        <div class="info mb-3" style="max-width: 540px;">
            <img src="${item.img}" class="info-img" alt="">
            <div class="info-body">
              <h5 class="info-title">${item.title}<span>${item.discount}</span></h5>
            </div>
        </div>
        `
            })
            $boutique_wrap.html(html2);
        }
    })
})();