$(document).ready(function(){
    if (window.localStorage && localStorage.user_details) {
        var myArray = JSON.parse(localStorage.getItem("user_details"));

        for(i=0; i<myArray.length; i++){
            var user = myArray[i];

        }
        console.log(user);

        $(".output").text("Welcome, " + user.user_Name.toUpperCase());

        var letter = user.user_Name[0].toUpperCase();
        console.log(letter);
        
        $("#profileImage").text(letter);

    }else if (window.localStorage && localStorage.new_user) {
        var myArray = JSON.parse(localStorage.getItem("new_user"));

        for(i=0; i<myArray.length; i++){
            var user = myArray[i];

        }
        console.log(user);

        $(".output").text("Welcome, " + user.uName.toUpperCase());

        var letter = user.uName[0].toUpperCase();
        console.log(letter);
        $("#profileImage").text(letter);

    };


// CLEARS THE DATA FROM THE LOCAL STORAGE AND REDIRECTS TO LOGIN PAGE(LANDING-PAGE)
    $("#logout").click(function(){
       localStorage.clear();
       window.location="index.html"; 
    });
});