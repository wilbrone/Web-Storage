$(document).ready(function(){

    // for login
    function User(user_name,user_password){
        this.user_Name = user_name;
        this.passWord = user_password;
    };

    // for sign up
    function New_User(email,f_name,u_name,p_word){
        this.Email = email;
        this.fName = f_name;
        this.uName = u_name;
        this.pWord = p_word;
    };

    



    $("form#sign-in").submit(function(){
        event.preventDefault();
        var userName =$("#user_name").val();
        var pass =$("#password").val();

        var obj=new User(userName,pass);
        var arr = JSON.parse(localStorage.getItem("user_details")) || [];
        arr.push(obj);
        localStorage.setItem("user_details", JSON.stringify(arr));

        // VALIDATION AND REDIRECTION TO NEXT PAGE...ON  SUCCESSFUL LOGIN
        if(pass == "password"){
            alert("Password correct...");  //this will show up if pword is right

            window.location="main-page.html";  //this is not happening
        }else{
            alert("Invalid password...");  //this will show up if pword is wrong
            pass="";
        };

    });


    $("form#sign-up").submit(function(){
        event.preventDefault();

        var email =$("#email").val();
        console.log(email);
        var full_name =$("#full_name").val();
        console.log(full_name);
        var uName =$("#u_name").val();
        console.log(uName);
        var pWord =$("#p-word").val();
        console.log(pWord);
        // var pWord =$("#password").val();

        // this is the format ***New_User(email,f_name,u_name,p_word)***
        var obj_user=new New_User(email,full_name,uName,pWord);
        console.log(obj_user);
        var new_arr = JSON.parse(localStorage.getItem("new_user")) || [];
        new_arr.push(obj_user);
        localStorage.setItem("new_user", JSON.stringify(new_arr));


        // VALIDATION AND REDIRECTION TO NEXT PAGE...ON  SUCCESSFULL LOGIN
        if(pWord !== ""){
            window.location="main-page.html";  //this is not happening
        }else{
            alert("Invalid password...");  //this will show up if pword is wrong
            pWord="";
        };
    });


    $("#btr").click(function(){
        $("#head1").toggle();
        $("#head2").toggle();
        $(".down").toggle();
        $(".up").toggle();

    });

    $("#btr2").click(function(){
        $("#head1").toggle();
        $("#head2").toggle();
        $(".down").toggle();
        $(".up").toggle();

    });


    // HOVER EFFECTS
    $(".cubatheme").mouseover(function () {
        $("#cubatext").show();
    });
    $(".cubatheme").mouseleave(function () {
        $("#cubatext").hide();
    });

    $(".chinatheme").mouseover(function () {
        $("#chinatext").show();
    });
    $(".chinatheme").mouseleave(function () {
        $("#chinatext").hide();
    });

    $(".paristheme").mouseover(function () {
        $("#paristext").show();
    });
    $(".paristheme").mouseleave(function () {
        $("#paristext").hide();
    });

    $(".indiatheme").mouseover(function () {
        $("#indiatext").show();
    });
    $(".indiatheme").mouseleave(function () {
        $("#indiatext").hide();
    });

    $(".egypttheme").mouseover(function () {
        $("#egypttext").show();
    });
    $(".egypttheme").mouseleave(function () {
        $("#egypttext").hide();
    });

    $(".japantheme").mouseover(function () {
        $("#japantext").show();
    });
    $(".japantheme").mouseleave(function () {
        $("#japantext").hide();
    });

});
