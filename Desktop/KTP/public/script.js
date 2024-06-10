// -------------------slideshow-------------

  // -------------------------------------trial 

//   // script.js
//   document.addEventListener('DOMContentLoaded', function() {
//     const movingBox = document.querySelector('.moving-box');
  
//     // Options for the observer (which part of the element is visible)
//     const options = {
//         root: null, // Use the viewport as the container
//         rootMargin: '0px',
//         threshold: 0.5 // Trigger when 50% of the element is visible
//     };
  
//     // Create the Intersection Observer
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Add the move-in class when the element comes into view
//                 movingBox.classList.add('move-in');
//             }
//         });
//     }, options);
  
//     // Start observing the target element
//     observer.observe(movingBox);
//   });

// $(document).ready(function() {
//     var slideIndex = 0;
//     var slideInterval;
  
    // Function to start the slideshow
    // function startSlideshow() {
    //   slideInterval = setInterval(showSlides, 3000); // Change image every 5 seconds
    // }
  
    // Function to stop the slideshow
    // function stopSlideshow() {
    //   clearInterval(slideInterval);
    // }
  
    // Function to show slides
    // function showSlides() {
    //   var i;
    //   var slides = $(".services");
    //   for (i = 0; i < slides.length; i++) {
    //     slides.eq(i).removeClass("active");
    //   }
    //   slideIndex++;
    //   if (slideIndex > slides.length) {slideIndex = 1}
    //   slides.eq(slideIndex - 1).addClass("active");
    // }
  
    // Start the slideshow
//     startSlideshow();
  
//     // Pause slideshow on hover
//     $(".slider").hover(
//       function() {
//         stopSlideshow();
//       },
//       function() {
//         startSlideshow();
//       }
//     );
  
//   });
  
  
// ---------------slide-----------------------

const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace('active');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


// ---------------contact--------------
document.getElementById('show-contact-btn').addEventListener('click', function() {
    var contactCard = document.querySelector('.contact-card');
    var infos = document.querySelectorAll('.info');

    contactCard.classList.remove('hidden');
    contactCard.classList.add('show');

    setTimeout(function() {
        contactCard.classList.add('visible');
        infos.forEach(function(info) {
            info.classList.add('visible');
        });
    }, 10); // Small timeout to trigger the CSS transitions
});