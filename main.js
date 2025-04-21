function encode(){
        var inpText = document.getElementById("Inp").value;
        var outpText = btoa(inpText);
        document.getElementById("Outp").innerHTML=outpText;
        document.getElementById("Inp").value="";}
function decode(){
        var inpText = document.getElementById("Inp").value;
        var outpText = atob(inpText);
        document.getElementById("Outp").innerHTML=outpText;
        document.getElementById("Inp").value="";}
