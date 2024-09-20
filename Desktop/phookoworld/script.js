// ----------------MENU------------------------
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

// -------------slider-------------------
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

// ----------------mission----------
document.addEventListener('DOMContentLoaded', function () {
	function isElementInViewport(el) {
	  const rect = el.getBoundingClientRect();
	  return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}
  
	function onScroll() {
	  const missionElement = document.querySelector('.mission');
	  if (isElementInViewport(missionElement)) {
		missionElement.classList.add('visible');
	  } else {
		missionElement.classList.remove('visible');
	  }
	}
  
	document.addEventListener('scroll', onScroll);
	window.addEventListener('resize', onScroll);
	window.addEventListener('load', onScroll);
  
	// Initial check
	onScroll();
  });
  

//   --------------------pop-up-------------

// function openPopup(src) {
//     var popup = document.getElementById("popup");
//     var popupImg = document.getElementById("popup-img");
//     popup.style.display = "block";
//     popupImg.src = src;
// }

// function closePopup() {
//     var popup = document.getElementById("popup");
//     popup.style.display = "none";
// }

function openPopup(src) {
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popup-img");
    popup.style.display = "block";
    popupImg.src = src;
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

