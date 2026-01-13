const fullName = "Thomas Duperron"
var i = 0
var speed = 75;
function typedEffect() {
    if (i < fullName.length) {
        document.getElementById("typed").innerHTML += fullName.charAt(i);
        i++;
        setTimeout(typedEffect, speed);
    }
}