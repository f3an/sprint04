let timesClicked = 0; //<---- this varible count a click

function transformation() {
    //if clicks < 1 we use script 1 if clikcs >= 0 we use second script :D
    if (timesClicked < 1) {
        document.getElementById("hero").innerHTML = "Hulk";
        document.getElementById("lab").style.background = "green";
        document.getElementById("hero").style.font = "130px 'Bowlby One', cursive";
        document.getElementById("hero").style.letterSpacing = "6px";
        // console.log("true");
        timesClicked++;
    } else if (timesClicked >= 1) {
        document.getElementById("hero").innerHTML = "Bruce Banner";
        document.getElementById("lab").style.background = "#ffb300";
        document.getElementById("hero").style.font = "60px 'Bowlby One', cursive";
        document.getElementById("hero").style.letterSpacing = "2px";
        // console.log("false ");
        timesClicked--;
    }
}