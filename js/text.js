function myFunction()
{
    $(".text-container").fadeOut(500);
    $("#linklogin").fadeOut(500);
    $("#form").fadeIn(1000);
}

function textanime()
{
    var text = document.getElementById("text");
    var btn = document.getElementById("mybutton")
    setTimeout(function() {
        text.classList.remove("title1");
        text.classList.add("title2");
    },3000);
    setTimeout(function() {
        btn.classList.remove("enterbutton");
        btn.classList.add("enterbutton2");
    },12000);
}
textanime();
