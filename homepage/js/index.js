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
