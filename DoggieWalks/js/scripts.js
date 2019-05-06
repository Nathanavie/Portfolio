$(document).ready(function() {
  // function to show dropdown menu
  $('.dropmenu').click(function(ev) {
    ev.preventDefault();
    // when dropmenu is pressed make the main button have class active
    $('.dropmenu').toggleClass("active");
    // unhide dropdown menu content
    $('#dropdown').toggleClass("hidden");
    // give content the animation to slide in to view
    $('#dropdown').toggleClass("shownav");
  });

  // show hidden content function
  $(".service").click(function(ev) {
    ev.preventDefault();
    // find the id of clicked element
    var sh = $(this).attr("id");
    // toggle hidden class on hidden content related to the element clicked
    $(sh).toggleClass("hidden");
    // give animation to hidden content
    $(sh).toggleClass("showh-cont");
  });

  // function to open background images in new tabs
  $(".gal-img").click(function(ev) {
    ev.preventDefault();
    // set img var to the link of background image, removing the url("") around the link
    var img = $(this).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1');
    // open link to img in new tab
    window.open(img);
  });

  // sidenav open function
  $('#open').click(function(ev) {
    ev.preventDefault();
    // when open is clicked, set sidenav to 100% width
    $(".sidenav").css("width", "100%");
  });

  // close sidenav function
  $('#close').click(function(ev) {
    ev.preventDefault();
    // when close is clicked set sidenav to 0% width
    $(".sidenav").css("width", "0%");
  });
});
