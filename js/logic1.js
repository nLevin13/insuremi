
$(document).ready(function () {
    $(":button").click(function () {
        console.log("button click")
        if (this.id === "ambulance" || this.id === "firetruck" || this.id === "policeman") {
            console.log("working")
            $("#wrapper-phonecall").css("display", "block");
            closeModal('q2')
        } else if(this.id === "emergency"){
            $("#wrapper-phonecall").css("display", "block");
            closeModal('q3')
        }else if (this.id === "next_01") {
            window.location.href = 'q2'
        } else if (this.id === "next_02" || this.id ==="no-emergency") {
            window.location.href = 'q3'
        } else if (this.id === "next_03") {
            window.location.href = 'q4'
        } else if (this.id === "next_04") {
            window.location.href = 'q5'
        } else if (this.id === "cancel-call"){
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
        } else if (this.id === "signUp"){
        window.location.href = 'sign_up2'
        } else if (this.id === "logIn" || this.id === "signIn") {
        window.location.href = "sign_in"
        } else if(this.id === "next_00"){
        window.location.href = 'q1'
        }
  });


    if ($("#countdown").length >0) {
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


});


    var closeModal = function(q){
    console.log("in timeout")
    setTimeout(function(){$("#wrapper-phonecall").css("display", "none"), window.location.href = q}, 3000);
    };

//    function hasGetUserMedia() {
//        return !!(navigator.mediaDevices &&
//          navigator.mediaDevices.getUserMedia);
//      }
//
//      if (hasGetUserMedia()) {
//        // Good to go!
//        console.log('good to go')
//      } else {
//        alert('getUserMedia() is not supported by your browser');
//      }


