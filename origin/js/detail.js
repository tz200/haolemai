; (function () {
    function geturl(string) {
        var arr = location.search.slice(1).split("&");
        for (var i = 0; i < arr.length; i++) {
            var query = arr[i].split("=");
            if (query[0] === string) {
                return query[1];
            }
        }
    }
    var id = geturl("id");
    var $detail = $("#detail");
    var goodArr = null;
    $.ajax({
        url: "/server/data/a.json",
        type: "get",
        dataType: "json",
        data: { id },
    }).then((data) => {
        var obj = data.res.find(function (value) {
            return value.id === id;
        })
        var html = '';
        html += `
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-6" id="small">
                    <img src="${obj.img}" class="card-img" alt="">
                    <div class="mirror" id="mirror"></div>
                </div>
                <div class="col-md-6">
                    <div class="card-body d-flex flex-column justify-content-between" style="height:100%;">
                        <h3 class="card-title" style="font-size: 18px;">${obj.title}</h3>
                        <p class="card-text">${obj.slogan}</p>
                        <p class="card-text text-warning" style="font-size: 20px;">${obj.discount}</p>
                        <p class="card-text d-flex justify-content-between">
                            <span class="d-flex align-items-center" style="font-size: 20px;">收藏该产品</span>
                            <button type="button" data-id=${obj.id} class="btn btn-dark">加入购物车</button>
                        </p>
                    </div>
                </div>
            </div>
        </div >
        <div class="connect-box">
            <h2>售后保障</h2>
            <div class="ensure">
                <h3>退换货保障</h3>
                <p>
                    好乐买根据所售商品性质的不同，为您提供自签收次日起“7日内退货”或者“7日内退换货”的服务，具体详情如下：<br>
                    1、出于安全和卫生考虑，贴身用品，如：文胸、背心、内裤、内衣套装、保暖内衣和内裤以及保暖内衣套装、泳装、袜子（包括丝袜、连裤袜、运动袜、打底裤）等，一经签收，非质量问题，均不予退换货。商品详情页均有相应的标注说明，敬请您选购商品时仔细查看，感谢您的理解与配合！<br>
                    2、特卖商品、秒杀商品以及全球购商品，仅支持签收次日起“7日内退货”服务，不支持换货服务。部分全球购商品不支持退货，敬请您选购时仔细查看商品详情页的说明内容，感谢您的理解与配合！<br>
                    3、除上述两类商品外的普通商品，支持签收次日起“7日内退换货”服务，换货仅支持“同款、同色、不同尺码”的商品。<br>
                    4、超值区商品因价格远低于市场价格出售，订单付款成功后，不可取消并且不提供退换货及三包和维修服务，敬请谅解。
                </p>
            </div>
            <div class="ensure">
                <h3>退换货费用</h3>
                <p>
                    个人原因退换货时，个人承担寄回运费，好乐买为您承担换货再次发出的普通快递运费<br>
                    质量问题退换货时，请您先行垫付寄回运费，库房收到商品核实无误后将为您实报实销寄回运费，上限15元<br>
                    好乐买暂不提供上门取件退换货服务，暂不支持签收邮局平邮及快递到付形式的退换货包裹，请您选择韵达等常见的普通快递，感谢您的理解与配合<br>
                    更多详细信息请查看 《好乐买退换货规约》
                </p>
            </div>
        </div>
        <div>
            <img src="../resource/images/service.png" alt="">
        </div>
        `
        $detail.html(html);
        goodArr = data.res;
    })
    $detail.on("click", ".btn", function (e) {
        var goodid = $(e.target).attr("data-id");
        var obj = goodArr.find(value => value.id === goodid);
        var shoppingstring = localStorage.getItem("shoppinggoods") || "[]";
        var shoppingcar = JSON.parse(shoppingstring);
        var ishas = shoppingcar.find(info => info.id === goodid);
        if (ishas) {
            ishas.count++;
        } else {
            obj.count = 1;
            shoppingcar.push(obj);
        }
        localStorage.setItem("shoppinggoods", JSON.stringify(shoppingcar));
        console.log(shoppingcar);
    })

})()