$(document).ready(function(){

  let mainNavLinks = document.querySelectorAll("nav a");
  let mainSections = document.querySelectorAll("article section");

  let lastId;
  let cur = [];

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  $('#open').click(function(ev){
    ev.preventDefault();
    $('.sidenav').css("width","100%");
    $('#close').toggleClass('hidden');
  });

  $('#close').click(function(ev){
    ev.preventDefault();
    $('.sidenav').css("width", "0%");
    $('#close').toggleClass('hidden');
  });
  $('.sidenav a').click(function(ev) {
    ev.preventDefault();
    $('.sidenav').css("width", "0%");
    $('#close').toggleClass('hidden');
    var link = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    });
  });
});

var animate = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.secthide');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
  setTimeout(function(){
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'secthide',
          'sectshow'
        );
      }
    }
  },1000)}
  return {
    init: init
  };
};
