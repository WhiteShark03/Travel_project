$(document).ready(function () {
	$('.owl-carousel').owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
	center: true,
	loop: true,
	margin: 30,
	startPosition: 1,
	item: 3,
});

$('.slider__btn-prev').click(function () {
	owl.trigger('prev.owl.carousel');
});

$('.slider__btn-next').click(function () {
	owl.trigger('next.owl.carousel');
});
