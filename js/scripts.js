$(document).ready(function(){
  if ( $('aboutme').hasClass("active") ) {
    // $('titleabout').removeClass('hidden');
    alert('boo')
  }
});
$(document).ready(function(){

  let mainNavLinks = document.querySelectorAll("nav a");
  let mainSections = document.querySelectorAll("article section");

  let lastId;
  let cur = [];

  // This should probably be throttled.
  // Especially because it triggers during smooth scrolling.
  // https://lodash.com/docs/4.17.10#throttle
  // You could do like...
  // window.addEventListener("scroll", () => {
  //    _.throttle(doThatStuff, 100);
  // });
  // Only not doing it here to keep this Pen dependency-free.

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
});
