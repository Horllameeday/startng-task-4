function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["message"].value;
    if (x.length < 4) {
        alert("You need to fill in at least 4 characters for the name");
        return false;
    }
    else if (y.length < 20) {
        alert("You need to fill in at least 20 characters for the message");
        return false;
    }
    else {
        return true;
    }
}