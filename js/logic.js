
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
            window.location.href = 'q2'
        } else if (this.id === "next_02") {
            window.location.href = 'q3'
        } else if (this.id === "next_03") {
            window.location.href = 'q4'
        } else if (this.id === "next_04") {
            window.location.href = 'q5'
        }
    });











});



