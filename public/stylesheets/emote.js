var a = localStorage.getItem("textval");
document.getElementById("item3").style.visibility = "hidden";
//document.getElementById("score").innerHTML= a;
if(a<=-10){
    document.getElementById("res").innerHTML = "ANGRY!!!";
    document.getElementById("res").style.color = "#C0392B";
    document.getElementById("myimg").src = "/stylesheets/Images/angry.png";
}else if(a>-10 && a<=-6){
    document.getElementById("res").innerHTML = "AVERTED!!";
    document.getElementById("res").style.color = "#F1C40F";
    document.getElementById("myimg").src = "/stylesheets/Images/aversion.png";    
}else if(a>-6 && a<=-2){
    document.getElementById("res").innerHTML = "SAD!";
    document.getElementById("res").style.color = "#2980B9";
    document.getElementById("myimg").src = "/stylesheets/Images/sadness.png";
}else if(a>-2 && a<=2){
    document.getElementById("res").innerHTML = "NEUTRAL";
    document.getElementById("res").style.color = "#DCE1DE";
    document.getElementById("myimg").src = "/stylesheets/Images/neutral.png";
}else if(a>2 && a<=6){
    document.getElementById("res").innerHTML = "HAPPY!!";
    document.getElementById("res").style.color = "#E67E22";
    document.getElementById("myimg").src = "/stylesheets/Images/happy.png";
}else{
    document.getElementById("res").innerHTML = "EXCITED!!!";
    document.getElementById("res").style.color = "rgb(9,158,9)";
    document.getElementById("myimg").src = "/stylesheets/Images/veryhappy.png";
}

