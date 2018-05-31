var x = 0;

function secret() {
    if (x <= 0) {
        document.getElementById("secretMessage").innerHTML = "Secret Message congrats";
        x++;
    } else {
        document.getElementById("secretMessage").innerHTML = "";
        x--;
    }
}