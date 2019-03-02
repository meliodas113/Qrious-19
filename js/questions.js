$(document).ready(function () {
    $(".question").addClass("animated fadeInRightBig");
    $(".options").addClass("animated fadeInLeftBig");
    $(".lowbtn").addClass("animated fadeInLeftBig");
   $(function(){

       $(".options").on("click", function(){
         $(".options").removeClass("selected");
         $(this).addClass("selected");
       });

      });




   });
   var counter = 0;
   document.getElementById('next').addEventListener('click', function(e){
       $(".options").removeClass("selected");
       document.getElementById('ques').innerHTML = questions[counter].question;
       document.getElementById('option1').innerHTML = questions[counter].option1;
       document.getElementById('option2').innerHTML = questions[counter].option2;
       document.getElementById('option3').innerHTML = questions[counter].option3;
       document.getElementById('option4').innerHTML = questions[counter].option4;
       console.log(questions[counter].correct_answer);
       if(counter < 1) counter++;
   });
   document.getElementById('prev').addEventListener('click', function(e){
       if(counter > 0){
       counter--;
       document.getElementById('ques').innerHTML = questions[counter].question;
       document.getElementById('option1').innerHTML = questions[counter].option1;
       document.getElementById('option2').innerHTML = questions[counter].option2;
       document.getElementById('option3').innerHTML = questions[counter].option3;
       document.getElementById('option4').innerHTML = questions[counter].option4;
       console.log(questions[counter].correct_answer);
       }
   });

   function SubmitOption() {
      $(".options").removeClass("selected");
      document.getElementById("next").click();
       var x = document.getElementsByClassName("selected")[0].innerHTML;
       console.log(x);
       var abc = new XMLHttpRequest();
       abc.onreadystatechange = function(){
           if(this.readystate == 4 && this.status == 200)
           {
           }
           var y = JSON.stringify(x.value);
           abc.open("GET","url",true);
           abc.send(y);
       }

   }
   //let sendObj = JSON.stringify({level_no:1});

//    function loadDoc() {
//        var xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function() {
//          if (this.readyState == 4 && this.status == 200) {
//            questions = this.responseText;
//          }
//        };
//        xhttp.open("GET", "url", true);
//        xhttp.send(sendObj);
//      }
   var questions = [
       {
           question : "1 Grand Central Terminal, Park Avenue, New York is the world's",
           option1 : "largest railway station",
           option2 : "largest railway station",
           option3 : "largest railway station",
           option4 : "largest railway station",
           correct_answer : "1"
       },
       {
           question : "2 Small Central Terminal, Park Avenue, New York is the world's",
           option1 : "largest railway station",
           option2 : "largest railway station",
           option3 : "largest railway station",
           option4 : "largest railway station",
           correct_answer : "3"
       },
       {
           question : "3 Large Central Terminal, Park Avenue, New York is the world's",
           option1 : "largest railway station",
           option2 : "largest railway station",
           option3 : "largest railway station",
           option4 : "largest railway station",
           correct_answer : "4"
       },
   ]



   {
    function openNav()
    {
       document.getElementById('nav').style.height = "100%";

    }
    function closeNav()
    {
       document.getElementById('nav').style.height = "0%";

    }

    function toggleSidebar(ref) {
   ref.classList.toggle('active');
   document.getElementById('sidebar').classList.toggle('active');

         }

 function toggleFullScreen() {
   if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
     if (document.documentElement.requestFullScreen) {
       document.documentElement.requestFullScreen();
     } else if (document.documentElement.mozRequestFullScreen) {
       document.documentElement.mozRequestFullScreen();
     } else if (document.documentElement.webkitRequestFullScreen) {
       document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
     }
   } else {
     if (document.cancelFullScreen) {
       document.cancelFullScreen();
     } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
     } else if (document.webkitCancelFullScreen) {
       document.webkitCancelFullScreen();
     }
   }
 }

 window.addEventListener('resize', function(){
  if(screen.width === window.innerWidth){
     $('.final').toggleClass('active');
     $('.close').toggleClass('active');
}
});





}
