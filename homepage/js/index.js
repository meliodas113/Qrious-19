$(function () {
  var $polygons = $('.bg > polygon');

  var ANIM = {
    duration: 1.5,
    stagger: 0.005,

    from: {
      opacity: 0,
      scale: 0,
      transformOrigin: 'center center',
      force3D: true },


    to: {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeInOut,
      force3D: true } };



  var timeline = new TimelineMax({
    delay: 0,
    repeat: 0,
     repeatDelay: 0.5,
    //yoyo: true
  });


  timeline.staggerFromTo($polygons, ANIM.duration, ANIM.from, ANIM.to, ANIM.stagger, 0);
  //TweenMax.staggerFromTo(polygons, ANIM.duration, ANIM.from, ANIM.to, ANIM.stagger);

  $('body').addClass('loaded');
});

function onSignIn(googleUser)
{

    var profile=googleUser.getBasicProfile();
    $(function () {
      var $polygons = $('.bg > polygon');

      var ANIM = {
        duration: 1.5,
        stagger: 0.005,

        from: {
          opacity: 1,
          scale: 1,
          transformOrigin: 'center center',
          force3D: true },


        to: {
          opacity: 0,
          scale: 0,
          ease: Elastic.easeInOut,
          force3D: true } };



      var timeline = new TimelineMax({
        delay: 0,
        repeat: 0
        //repeatDelay: 0.5,
        //yoyo: true
      });


      timeline.staggerFromTo($polygons, ANIM.duration, ANIM.from, ANIM.to, ANIM.stagger, 0);
      //TweenMax.staggerFromTo(polygons, ANIM.duration, ANIM.from, ANIM.to, ANIM.stagger);

      $('body').addClass('loaded');
    });
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      }
    };
    xhttp.open("POST", "ajax_info.txt", true);
    xhttp.send(profile.getName());
    document.location.href ="www.facebook.com";
}

function SignOut()
{
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert('You have been logged out');
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    })
}
function onFailure(error) {
  alert("Login Failure");
  location.reload();

}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var name = profile.getName();
    }
  };
  xhttp.open("POST", "ajax_info.txt", true);
  xhttp.send(name);
}
