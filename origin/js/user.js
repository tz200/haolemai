;(function(){
    var $user = $("#user");
    var $pass = $("#pass");
    var $btn = $("#btn");
    var $tips = $("#tips");
    var $passtips = $("#passtips");
    var userlock = false;
    var passlock = false;
    $user.change( function() {
        var uval = $user.val();
        var reg = /^\D\w{5,9}$/;
        var result = reg.test(uval);
        if(!result){
            $tips.css("color","red").html("请输入6-10位由数字字母下划线的字符，开头不能为数字");
            userlock = false;
            return;
        }
        $tips.css("color","green").html("√，恭喜你用户名可用");
        $.ajax({
            url:"/server/php/user.php",
            type:"get",
            dataType:"json",
            data:{
                "username" : uval
            },
            success: function(data){
                if(!data.err){
                    userlock = true;
                    console.log(data.msg);
                }else{
                    console.log(data.msg);
                }
            }
        })
    })

    $pass.change(function() {
        var pval = $pass.val();
        var reg = /^\D\w{5,9}$/;
        var result = reg.test(pval);
        if(!result){
            $passtips.css("color","red").html("请输入6-10位由数字字母下划线的字符，开头不能为数字");
            passlock = false;
            return;
        }
        passlock = true;
    })

    $btn.click(function(){
        if(!(userlock && passlock)){
            return;
        }
        console.log($user.val());
        $.ajax({
            url : "/server/php/regist.php",
            type : "post",
            data : {
                username : $user.val(),
                password : $pass.val()
            },
            dataType : "json",
            success : function(data){
                if(!data.err){
                    alert(data.msg);
                    location.href = "../html/login.html";
                }else{
                    alert(data.msg);
                }
            }
        })
    })
})();