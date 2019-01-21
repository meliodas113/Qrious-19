$(document).ready(function () {
 $(".question").addClass("animated bounceInDown");
 $(".options").addClass("animated bounceInUp");
 $(".lowbtn").addClass("animated bounceInUp");
 $(".options").click(function (e) {
     e.preventDefault();
     var clicked = e.target ;
     clicked.style.backgroundColor="red";
     for(let div in document.getElementsByClassName("options"))
        {
            if(div!=clicked)
                div.style.backgroundColor = "rgba(137,134,181,0.4)";
        }
 });
});


