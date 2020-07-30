//----------Hamburger menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

//----------Carousel Slider
// const carouselSlide = document.querySelector('.carousel-slide');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselSlideM = document.querySelector('.carousel-slide-m');

const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselImagesM = document.querySelectorAll('.carousel-slide-m img');

//Buttons
// const prevBtn = document.querySelector('.prevBtn');
// const nextBtn = document.querySelector('.nextBtn');

const prevBtn = document.querySelectorAll('.prevBtn');
const nextBtn = document.querySelectorAll('.nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
//new
const sizeM = carouselImagesM[0].clientWidth;
let time = 3000;
let slider;

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
carouselSlideM.style.transform = 'translateX(' + -sizeM * counter + 'px)';

//Button Listener
nextBtn.forEach((x) =>
	x.addEventListener('click', () => {
		if (counter >= carouselImages.length - 1) {
			return;
		}
		carouselSlide.style.transition = 'transform 0.4s ease-in-out';
		carouselSlideM.style.transition = 'transform 0.4s ease-in-out';
		counter++;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		carouselSlideM.style.transform = 'translateX(' + -sizeM * counter + 'px)';
	})
);

// nextBtn.addEventListener('click', () => {
// 	if (counter >= carouselImages.length - 1) {
// 		return;
// 	}
// 	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
// 	counter++;
// 	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
// });

prevBtn.forEach((x) => {
	x.addEventListener('click', () => {
		if (counter <= 0) {
			return;
		}
		carouselSlide.style.transition = 'transform 0.4s ease-in-out';
		carouselSlideM.style.transition = 'transform 0.4s ease-in-out';
		counter--;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		carouselSlideM.style.transform = 'translateX(' + -sizeM * counter + 'px)';
	});
});
// prevBtn.addEventListener('click', () => {
// 	if (counter <= 0) {
// 		return;
// 	}
// 	carouselSlide.style.transition = 'transform 0.4s ease-in-out';
// 	counter--;
// 	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
// });
function transitionCheck() {
	if (carouselImages[counter].classList.contains('lastClone')) {
		// carouselSlide.style.transition = 'none';
		carouselSlide.style.transition = 'none';
		carouselSlideM.style.transition = 'none';
		counter = carouselImages.length - 2;
		// carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		carouselSlideM.style.transform = 'translateX(' + -sizeM * counter + 'px)';
	}

	if (carouselImages[counter].classList.contains('firstClone')) {
		// carouselSlide.style.transition = 'none';
		carouselSlide.style.transition = 'none';
		carouselSlideM.style.transition = 'none';
		counter = carouselImages.length - counter;
		// carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		carouselSlideM.style.transform = 'translateX(' + -sizeM * counter + 'px)';
	}
}

// function transitionCheck() {
// 	if (carouselImages[counter].id === 'lastClone') {
// 		carouselSlide.style.transition = 'none';
// 		counter = carouselImages.length - 2;
// 		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
// 	}

// 	if (carouselImages[counter].id === 'firstClone') {
// 		carouselSlide.style.transition = 'none';
// 		counter = carouselImages.length - counter;
// 		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
// 	}
// }

carouselSlide.addEventListener('transitionend', transitionCheck);
carouselSlideM.addEventListener('transitionend', transitionCheck);