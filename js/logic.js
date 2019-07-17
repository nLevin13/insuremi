$(document).ready(function () {

    $(button).click(function () {
        if ($(":button").name == "phonecall") {
            $("#wrapper-phonecall").css("display", "block");
            setTimeout(function () {
                $("wrapper-phonecall").css("display", "none"), 50000
            });
        } else {
            moveToNextPage();
        }


    }
)});

// var moveToNextPage = function(){
// if($(":button").name == 
// }