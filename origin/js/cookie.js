; (function () {
    function getCookie(key) {
        var cookieStr = document.cookie;
        var arr = cookieStr.split("; ");
        for (var i = 0; i < arr.length; i++) {
            var subArr = arr[i].split("=");
            if (subArr[0] === key) {
                return subArr[1];
            }
        }
    }
    var isLogin = getCookie("islogin");
    if (!isLogin) {
        location.href = "./login.html#" + location.href;
    }
})();