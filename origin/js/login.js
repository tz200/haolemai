; (function () {
    var $user = $("#user");
    var $pass = $("#pass");
    var $btn = $("#btn");
    var $tips = $("#tips");
    var $passtips = $("#passtips");
    var user_lock = false;
    var pass_lock = true;

    $user.change(() => {
        var reg = /^\D\w{5,9}$/;
        var result = reg.test($user.val());
        if (!result) {
            $tips.css("color", "red").html("请输入6-10位由数字字母下划线的字符，开头不能为数字");
            user_lock = false;
            return;
        }
        user_lock = true;
        $tips.html("");
    })

    $pass.change(() => {
        var reg = /^\D\w{5,9}$/;
        var result = reg.test($pass.val());
        if (!result) {
            $passtips.css("color", "red").html("请输入6-10位由数字字母下划线的字符，开头不能为数字");
            pass_lock = false;
            return;
        }
        pass_lock = true;
        $passtips.html("");
    })

    $btn.click(function () {
        if (!(user_lock && pass_lock)) {
            return;
        }
        $.ajax({
            url: "/server/php/login.php",
            type: "post",
            dataType: "json",
            data: {
                username: $user.val(),
                password: $pass.val()
            },
            success: function (data) {
                if (!data.err) {
                    alert(data.msg);
                    var targeturl = location.hash.slice(1) || "./index.html";
                    console.log(targeturl);
                    location.href = targeturl;
                } else {
                    alert(data.msg);
                }
            }
        })
    })



})();