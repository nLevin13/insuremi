function checkPalindrome(string) {
    var isPal = true;
    var length = string.toString().length;
    var i = length - 1
    var stringified = string.toString();
    for (i; i >= 0; i--) {
        var j = length - i-1;
        if (parseInt(stringified[j]) !== parseInt(stringified[i])) {
            console.log("Not Palidnrome")
            return false
        }
    }
    console.log("Palindrome")
    return true
}

checkPalindrome(1255521)
//algorithmic questions