function alertFunc()
{
    alert("Hello, world!");
    document.getElementById("textbox").style.fontSize = "4em";
}

function fancyText()
{
    if(document.getElementById("Fancy").unchecked)
    {
        alert("Entering Fancy Mode");
        var text = document.getElementById("textbox");
        text.style = "text-decoration: underline";
        document.getElementById("textbox").style.fontWeight = "bold";
        document.getElementById("textbox").style.color = "blue";
        document.getElementById("Fancy") = checked;

    } 
    else{
        document.getElementById("Fancy") = unchecked;
    }  

}

function boringText()
{
    document.getElementById("textbox").style.fontSize = "1.0em";
    document.getElementById("textbox").style.color = "black";
    document.getElementById("textbox").style.fontWeight = "normal";
}