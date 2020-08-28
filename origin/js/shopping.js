; (function () {
    var goods = JSON.parse(localStorage.getItem("shoppinggoods")) || [];
    var $table = $("#table");
    var $sum = $("#sum");
    var $shopping_box = $("#shopping_box");
    console.log(goods);
    function render() {
        var isallcheck = goods.every(value => {
            return value.ischeck;
        });
        var html = `
        <thead>
            <tr>
                <th class="text-center"><input class="isallcheck" ${isallcheck ? "checked" : ""} type="checkbox">全选</th>
                <th class="text-center">商品名称</th>
                <th class="text-center">商品图片</th>
                <th class="text-center">价钱</th>
                <th class="text-center">商品数量</th>
                <th class="text-center">操作</th>
                <th class="text-center">删除</th>
            </tr>
        </thead>
        <tbody>
        `
        goods.forEach((value) => {
            html += `
            <tr>
                <td class="text-center align-middle"><input class="checked" ${value.ischeck ? "checked" : ""} data-id=${value.id} type="checkbox"></td>
                <td class="text-center align-middle">${value.title}</td>
                <td class="text-center">
                    <img src="${value.img}" alt="" class="img-thumbnail">
                </td>
                <td class="text-center align-middle">￥${value.price}</td>
                <td class="text-center align-middle">${value.count}</td>
                <td class="text-center align-middle">
                    <button type="button" data-id=${value.id} class="btn btn-info plus">+</button>
                    <button type="button" data-id=${value.id} class="btn btn-info reduce">-</button>
                </td>
                <td class="text-center align-middle">
                    <button type="button" class=" float-none close " aria-label="关闭">
                        <span aria-hidden="true" class="text-warning del" data-id=${value.id}>&times;</span>
                    </button>
                </td>
            </tr>
            `

        })
        html += "</tbody>";
        $table.html(html);
    }
    render();
    total();

    function change() {
        localStorage.setItem("shoppinggoods", JSON.stringify(goods));
    }

    function total() {
        var all = 0;
        goods.forEach(value => {
            if (value.ischeck) {
                all += value.count * value.price;
            }
        })
        $sum.html("￥" + all);
        if(!goods.length){
            $sum.parent().prev().hide();
            $sum.parent().hide();
            $shopping_box.show();
        }else{
            $sum.parent().prev().show();
            $sum.parent().show();
            $shopping_box.hide();
        }
    }

    $table.delegate(".checked,.isallcheck,.plus,.reduce,.del", "click", function (e) {
        if (e.target.className === "checked") {
            var id = $(e.target).attr("data-id");
            var obj = goods.find(value => value.id === id);
            obj.ischeck = e.target.checked;
            render();
            change();
            total();
            return;
        }
        if (e.target.className === "isallcheck") {
            goods.forEach(value => {
                value.ischeck = e.target.checked;
            });
            render();
            change();
            total();
            return;
        }
        if (e.target.className.includes("plus")) {
            var id = $(e.target).attr("data-id");
            var obj = goods.find(value => value.id === id);
            obj.count++;
            render();
            change();
            total();
            return;
        }
        if (e.target.className.includes("reduce")) {
            var id = $(e.target).attr("data-id");
            var obj = goods.find(value => value.id === id);
            obj.count--;
            if (obj.count <= 0) {
                obj.count = 0;
            }
            render();
            change();
            total();
            return;
        }
        if (e.target.className.includes("del")) {
            var id = $(e.target).attr("data-id");
            var obj = goods.find(value => value.id === id);
            goods.splice(obj, 1);
            render();
            change();
            total();
            return;
        }
    })

})();