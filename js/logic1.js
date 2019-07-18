$(document).ready(function () {
    $(":button").click(function () {
        
        if(this.id === "emergency"){
            $("#wrapper-phonecall").css("display", "block");
            closeModal('q3')
        }else if (this.id === "next_01") {
            window.location.href = 'q2'
        } else if (this.id === "next_02" || this.id === "no-emergency") {
            window.location.href = 'q3'
        } else if (this.id === "next_03") {
            window.location.href = 'q4'
        } else if (this.id === "next_04") {
            window.location.href = 'q5'
        } else if (this.id === "cancel-call") {
            $("#wrapper-phonecall").css("display", "none")
        } else if (this.id === "next_05") {
            window.location.href = 'q6'
        } else if (this.id === "next_06") {
            window.location.href = 'q7'
        } else if (this.id === "next_07") {
            window.location.href = 'q8'
        } else if (this.id === "next_08") {
            window.location.href = 'q9'
        } else if (this.id === "next_09") {
            window.location.href = 'q10'
        } else if (this.id === "signUp") {
            window.location.href = 'sign_up2'
        } else if (this.id === "logIn" || this.id === "signIn") {
            window.location.href = "sign_in"
        } else if (this.id === "next_00") {
            window.location.href = 'q1'
        }
    });


    if ($("#countdown").length > 0) {
        var timeleft = parseInt($('#countdown').html())
        $("#countdown").html(timeleft);
        var timer = setInterval(function () {
            $("#countdown").html(timeleft);
            timeleft -= 1;
            if (timeleft == -1) {
                clearInterval(timer);
                $("#countdown").html('Good');
                setInterval(function () {
                    window.location.href = 'q4'
                }, 2000)
            }
        }, 1000);
    }

     if ($("#countdown1").length > 0) {
        var timeleft = parseInt($('#countdown1').html())
        $("#countdown1").html(timeleft);
        var timer = setInterval(function () {
            $("#countdown1").html(timeleft);
            timeleft -= 1;
            if (timeleft == -1) {
                clearInterval(timer);
                $("#phone-text").text("AMBULANCE IS ON THE WAY!");
                $("#wrapper-phonecall").css("display", "block");
                setInterval(function () {
                $("#wrapper-phonecall").css("display", "none")
                }, 4000)
                $("#wrapper-phonecall").css("display", "block");
                $("#phone-text").text("AMBULANCE AND POLICE ARE ON THE WAY!");

            }
        }, 1000);
    }

    $('#signUp').click(function () {
        window.location.href = 'sign_up2.html'
    });
    $('#signIn').click(function () {
        window.location.href = 'sign_in.html'
    });
    $('#next_00').click(function () {
        window.location.href = 'q1.html'
    });
    $('#capture-btn').click(function () {
        if ($('#next_05').length > 0) {
            $('#next_05').removeClass('invisible')
        }
        if ($('#next_06').length > 0) {
            $('#next_06').removeClass('invisible')
        }
    });
});


var closeModal = function (q) {
    console.log("in timeout")
    setTimeout(function () { $("#wrapper-phonecall").css("display", "none"), window.location.href = q }, 3000);
};

