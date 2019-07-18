
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
        }
    });




});


    var closeModal = function(q){
    console.log("in timeout")
    setTimeout(function(){$("#wrapper-phonecall").css("display", "none"), window.location.href = q}, 3000);
    };


