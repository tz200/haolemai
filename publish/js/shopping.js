"use strict";!function(){var c=JSON.parse(localStorage.getItem("shoppinggoods"))||[],t=$("#table"),n=$("#sum"),a=$("#shopping_box");function i(){var e='\n        <thead>\n            <tr>\n                <th class="text-center"><input class="isallcheck" '+(c.every(function(t){return t.ischeck})?"checked":"")+' type="checkbox">全选</th>\n                <th class="text-center">商品名称</th>\n                <th class="text-center">商品图片</th>\n                <th class="text-center">价钱</th>\n                <th class="text-center">商品数量</th>\n                <th class="text-center">操作</th>\n                <th class="text-center">删除</th>\n            </tr>\n        </thead>\n        <tbody>\n        ';c.forEach(function(t){e+='\n            <tr>\n                <td class="text-center align-middle"><input class="checked" '+(t.ischeck?"checked":"")+" data-id="+t.id+' type="checkbox"></td>\n                <td class="text-center align-middle">'+t.title+'</td>\n                <td class="text-center">\n                    <img src="'+t.img+'" alt="" class="img-thumbnail">\n                </td>\n                <td class="text-center align-middle">￥'+t.price+'</td>\n                <td class="text-center align-middle">'+t.count+'</td>\n                <td class="text-center align-middle">\n                    <button type="button" data-id='+t.id+' class="btn btn-info plus">+</button>\n                    <button type="button" data-id='+t.id+' class="btn btn-info reduce">-</button>\n                </td>\n                <td class="text-center align-middle">\n                    <button type="button" class=" float-none close " aria-label="关闭">\n                        <span aria-hidden="true" class="text-warning del" data-id='+t.id+">&times;</span>\n                    </button>\n                </td>\n            </tr>\n            "}),e+="</tbody>",t.html(e)}function d(){localStorage.setItem("shoppinggoods",JSON.stringify(c))}function s(){var e=0;c.forEach(function(t){t.ischeck&&(e+=t.count*t.price)}),n.html("￥"+e),c.length?(n.parent().prev().show(),n.parent().show(),a.hide()):(n.parent().prev().hide(),n.parent().hide(),a.show())}console.log(c),i(),s(),t.delegate(".checked,.isallcheck,.plus,.reduce,.del","click",function(e){if("checked"===e.target.className){var n=$(e.target).attr("data-id");return(t=c.find(function(t){return t.id===n})).ischeck=e.target.checked,i(),d(),void s()}if("isallcheck"===e.target.className)return c.forEach(function(t){t.ischeck=e.target.checked}),i(),d(),void s();if(e.target.className.includes("plus")){n=$(e.target).attr("data-id");return(t=c.find(function(t){return t.id===n})).count++,i(),d(),void s()}if(e.target.className.includes("reduce")){n=$(e.target).attr("data-id");return(t=c.find(function(t){return t.id===n})).count--,t.count<=0&&(t.count=0),i(),d(),void s()}if(e.target.className.includes("del")){n=$(e.target).attr("data-id");var t=c.find(function(t){return t.id===n});return c.splice(t,1),i(),d(),void s()}})}();