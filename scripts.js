
// Toggle the visibility of the menu when the hamburger menu is clicked
/*document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } 
    else {
        menu.style.display = 'flex';
    }
});*/

$(function() {
    $(".toggle").on("click", function() {
      try {
        var menu = $(".menu");
        if (menu.hasClass("active")) {
          menu.removeClass("active");
          $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        } else {
          menu.addClass("active");
          $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });
  });



  // ----------------------------------------
// const track = document.getElementById("slider");

// const handleOnDown = (e) =>
//   track.dataset.mouseDownAt = e.clientX;

// const handleUp = () =>
//   {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;  
//   }

// const handleOnMove = (e) =>
//   {
//     if (track.dataset.mouseDownAt === "0") return;

//     const mouseDelta =
//       parseFloat(track.dataset.mouseDownAt) - e.clientX,
//       maxDelta = window.innerWidth;

//     const percentage = (mouseDelta / maxDelta) * -100,
//       nextPercentageUnconstrained =
//         parseFloat(track.dataset.prevPercentage) + percentage,
//       nextPercentage = 
//         Math.max(Math.min(nextPercentageUnconstrained, 0), -70);

//     track.dataset.percentage = nextPercentage;

//     track.animate({
//       transform: 'translateX(${nextPercentage}%)'},
//       {duration: 1200, fill: "forwards"});
//   }

// window.onmousedown = (e) => handleOnDown(e);

// window.ontouchstart = (e) => handleOnDown(e.touches[0]);

// window.onmouseup  =  (e) => handleOnUp(e);

// window.ontouchend  =  (e) => handleOnUp(e.touches[0]);

// window.onmousemove  =  (e) => handleOnUp(e);

// window.ontouchmove  =  (e) => handleOnUp(e.touches[0]);

// $(document).ready(function() {
//   var slideIndex = 0;
//   showSlides();

//   function showSlides() {
//     var i;
//     var slides = $(".services");
//     for (i = 0; i < slides.length; i++) {
//       slides.eq(i).removeClass("active");
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides.eq(slideIndex - 1).addClass("active");
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
//   }

// });

$(document).ready(function() {
  var slideIndex = 0;
  var slideInterval;

  // Function to start the slideshow
  function startSlideshow() {
    slideInterval = setInterval(showSlides, 5000); // Change image every 5 seconds
  }

  // Function to stop the slideshow
  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  // Function to show slides
  function showSlides() {
    var i;
    var slides = $(".services");
    for (i = 0; i < slides.length; i++) {
      slides.eq(i).removeClass("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides.eq(slideIndex - 1).addClass("active");
  }

  // Start the slideshow
  startSlideshow();

  // Pause slideshow on hover
  $(".slider").hover(
    function() {
      stopSlideshow();
    },
    function() {
      startSlideshow();
    }
  );

});


  