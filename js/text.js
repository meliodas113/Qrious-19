// $(document).ready(function () {
//     setTimeout(function()
//     {
//         $("#text").removeClass("title1");
//         $("#text").addClass("title2");
//     },2500);
// });

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
