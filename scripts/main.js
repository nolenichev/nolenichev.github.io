$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  });
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

$('#eng-circle').circleProgress({
  value: .65,
  size: 70,
  startAngle: 0,
  fill: {
    gradient: ["#7f53ac", "#647dee"]
  }
});

$('#ru-circle').circleProgress({
  value: 1,
  size: 70,
  startAngle: 0,
  fill: {
    gradient: ["#7f53ac", "#647dee"]
  }
});

$('#cz-circle').circleProgress({
  value: .65,
  size: 70,
  startAngle: 0,
  fill: {
    gradient: ["#7f53ac", "#647dee"]
  }
});
