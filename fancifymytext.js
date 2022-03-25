function alertFunc() {
    alert("Hello, bigger world!");
    document.getElementById("textbox").style.fontSize = "4em";
}

function fancyText() 
{
    var text = document.getElementById("textbox");

    if (document.getElementById("Fancy").checked) 
    {
        alert("Entering Fancy Mode");
        var text = document.getElementById("textbox");
        text.style = "text-decoration: underline";
        text.style.fontWeight = "bold";
        text.style.color = "blue";
    }
    else if(document.getElementById("Boring").checked)
    {
        alert("Entering boring mode");
        var text = document.getElementById("textbox");
        text.style.fontSize = "1.0em";
        text.style.color = "black";
        text.style.fontWeight = "normal";
        text.style.textDecoration = "none";
    }
}

function upperCase() {
    var x = document.getElementById("textbox");
    x.value = x.value.toUpperCase();
    let text = x.value.split(".");
    let addOn = text.join("-Moo");
    x.value = addOn;
}