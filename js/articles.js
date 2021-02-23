$(window).on('load', function () {
	// Раскрытие всех статей
	$('.rubricator__content button').on('click', function() {
		$('.subjects._more').slideDown(300);
		$(this).slideUp(300);
	});

	// Раскрытие списка статей на мобилке
	$('.rubricator__heading').on('click', function() {
		$(this).toggleClass('open');
		$('.rubricator__content').slideToggle(300);
	});
});
