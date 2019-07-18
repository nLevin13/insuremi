$(document).ready(function () {
    $(":button").click(function () {
        console.log("button click")
        console.log(this)
        if (this.id === "phonecall") {
            console.log("working")
            $("#wrapper-phonecall").css("display", "block");
            setTimeout(function () {
                $("wrapper-phonecall").css("display", "none"), 50000
            });
        } else if (this.id === "next_01") {
            window.location.href = 'q2.html'
        } else if (this.id === "next_02") {
            window.location.href = 'q3.html'
        } else if (this.id === "next_03") {
            window.location.href = 'q4.html'
        } else if (this.id === "next_04") {
            window.location.href = 'q5.html'
        } else if (this.id === "next_05") {
            window.location.href = 'q6.html'
        } else if (this.id === "next_06") {
            window.location.href = 'q7.html'
        } else if (this.id === "next_07") {
            window.location.href = 'q8.html'
        } else if (this.id === "next_08") {
            window.location.href = 'q9.html'
        } else if (this.id === "next_09") {
            window.location.href = 'q10.html'
        }
    });

    $('#signUp').click(function () {
        window.location.href = 'sign_up2.html'
    });
    $('#signIn').click(function () {
        window.location.href = 'sign_in.html'
    });
    $('#next_00').click(function () {
        window.location.href = 'q1.html'
    });







});



