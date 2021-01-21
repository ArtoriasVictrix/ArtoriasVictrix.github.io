// Общий для всего проекта JS-код

$(window).on('load', function(){
	// Определение устройства пользователя
	if (mobilecheck()) {
		$('.breadcrumbs__content').addClass('_scroll');
		$('.pagination').addClass('_scroll');
	}

	// Отключил кнопки, чтобы показать модальные окна
	$("form button").on('click', function(e) {
		e.preventDefault();
	});


	// Лоадер
	$("#btn-loader").on('click', function() {
		$(this).toggleClass('_loader');
		$('#blk-loader').toggleClass('_loader');
	});



	// Подключение полифила для objectFit
	objectFitImages();


	// Бургер меню
	function mobileMenu() {
		$('.mobile-menu__open').on('click', function() {
			$('.mobile-menu__overlay').fadeIn(300);
			$('.mobile-menu').addClass('_open');
			$('body').addClass('no-scroll');
		})

		$('.mobile-menu__close, .mobile-menu__overlay').on('click', function () {
			$('.mobile-menu__overlay').fadeOut(300);
			$('.mobile-menu').removeClass('_open');
			$('body').removeClass('no-scroll');
		})
	}
	mobileMenu();


	// Модальные окна
	function modal() {
		$('[data-modal-target]').on('click', function() {
			var target = $(this).attr('data-modal-target');
			$(target).addClass('_visible');
			if ($(target).hasClass('_animation')) {
				$(target).find('.modal__inner').addClass('_open')
			}
			$('body').addClass('no-scroll');
		})

		$('.modal button').on('click', function() {
			if ($(this).attr('data-modal-target')) {
			} else {
				$('body').removeClass('no-scroll');
				$('.modal__inner').removeClass('_open');
			}
			$(this).parents('.modal').removeClass('_visible');
		})

		$('.modal-overlay').on('click', function() {
			$('.modal').removeClass('_visible');
			$('body').removeClass('no-scroll');
			$('.modal__inner').removeClass('_open');
		})
	}
	modal();


	// Прилипающее меню
	function scroll() {
		if ($(document).scrollTop() > 50)
			$('._primary').addClass('_fixed');
		else
			$('._primary').removeClass('_fixed');
	}

	scroll();

	$(document).scroll(function () {
		scroll();
	});


	// Появление корзины
	$('.header__cart').on('click', function() {
		$('.basket').fadeIn(200);
		$('.basket-overlay').fadeIn(200);
		$('body').addClass('no-scroll');
	});
	// Исчезновение корзины
	$('.basket__close, .basket-overlay').on('click', function() {
		$('.basket').fadeOut();
		$('.basket-overlay').fadeOut();
		$('body').removeClass('no-scroll');
	});


	// Появление списка поиска
	$(".header-search input").on("keyup", function () {
		if($(this).val() == '') {
			$(this).parent().removeClass('_active');
			$(this).siblings('.search-block').slideUp();
		} else {
			$(this).parent().addClass('_active');
			$(this).siblings('.search-block').slideDown();
		}
	});

	$('.header-search input').focusin(function() {
		if($(this).val() != '') {
			$(this).parent().addClass('_active');
			$(this).siblings('.search-block').slideDown();
		};
	});

	$('.header-search input').focusout(function() {
		$(this).parent().removeClass('_active');
		$(this).siblings('.search-block').slideUp();
	});

	$('.search-block__close').on('click', function() {
		$(".header-search").removeClass('_active');
		$(".header-search input").val('');
		$('.search-block').slideUp();
	});


	// Слайдер товаров
	var productsSlider = new Swiper('.products-slider', {
		spaceBetween: 24,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			600: {
				slidesPerView: 2
			},
			900: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4,
				simulateTouch: false
			}
		}
	})


	// Маска для телефона
	$('input[type="tel"]').mask("+7 (999) 999-9999")

	// Раскрытие изображений
	lightbox.option({
		'albumLabel': 'Картинка %1 из %2'
	})


	// Селекты

	$('select').niceSelect();

	$(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
		var $option = $(this);
		var $dropdown = $option.closest('.nice-select');
		$dropdown.find('.selected').removeClass('selected');
		$option.addClass('selected');
		var text = $option.data('display') || $option.html();
		$dropdown.find('.current').html(text);
		$dropdown.prev('select').val($option.data('value')).trigger('change');
	});


	// Изменение title (всплывающая подсказка)
	$('.tooltip').tooltipster({
		contentAsHTML: true,
		interactive: true,
		trigger: 'custom',
		triggerOpen: {
			mouseenter: true,
			tap: true
		},
		triggerClose: {
			mouseleave: true,
			tap: true
		},

		functionPosition: function(instance, helper, position){
			position.coord.top += 4;
			return position;
		},
	});


	// Шаблон для уведомления
	$.notify.addStyle("notification", {
		html:
			"<div>" +
				"<div class='title' data-notify-html='title'/>" +
				"<div class='text' data-notify-html='text'/>" +
			"</div>",
	});

	// Появление уведомлений
	$('.notify').on('click', function() {

		$.notify({
			title: "Хьюстон, у нас проблема!<br>Что-то сломалось!",
			text: "Мы чиним прямо сейчас, если все еще не заработало - приходите позже."
		}, {
			position: 'bottom right',
			style: 'notification',
			autoHide: true,
			clickToHide: true
		});
	});


	// Табы
	$('.tabs__label').on('click', function() {
		$(this)
			.addClass('_active').siblings().removeClass('_active')
			.closest('.tabs').find('.tabs__content').removeClass('_active').eq($(this).index()).addClass('_active');
	});


	// Счетчик корзины
	var actual,
		next,
		prev,
		amount,
		addBtn,
		button,
		cartCount = $('.header__cart-count'),
		cartCountItems = cartCount.find('li'),
		animating = false;

	// Добавление товара
	$('.add-product').on('click', function() {
		button = $(this);
		setTimeout(function(){
			$(button).removeClass('_loader');

			if(!animating) {
				animating =  true;
				amount = Number(cartCountItems[1].innerText);
				addBtn = $(button)
				addBtn.addClass('is-added').find('path').eq(0).animate({
					//draw the check icon
					'stroke-dashoffset':0
				}, 300, function(){
					setTimeout(function(){
						basket(amount, 1);
						addBtn.removeClass('is-added').find('span').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
							addBtn.find('path').eq(0).css('stroke-dashoffset', '19.79');
							animating =  false;
						});
					}, 600);
				});
			}
		},2000);
	});

	// Удаление товара
	$('.basket__item .trash').on('click', function() {
		if(!animating) {
			amount = Number(cartCountItems[1].innerText);

			if (amount > 0) {
				animating =  true;
				basket(amount, 0);

				setTimeout(function(){
					animating =  false;
				}, 600);
			}
		}
	});

	// Счетчик корзины
	function basket(amount, count) {
		cartCount.addClass('active');

		if (count == 1) {
			actual = Number(cartCountItems[1].innerText) + 1;
			setTimeout(function() {
				cartCount.addClass('up');
			}, 300);

		} else {
			actual = Number(cartCountItems[1].innerText) - 1;
			setTimeout(function() {
				cartCount.addClass('down');
			}, 300);
		}

		next = actual + 1;
		prev = actual - 1;

		setTimeout(function() {
			cartCountItems[1].innerText = actual;
		}, 450);

		setTimeout(function() {
			cartCount.removeClass('active')
					.removeClass('up down');
		}, 500);

		setTimeout(function() {
			cartCountItems[0].innerText = prev;
			cartCountItems[2].innerText = next;
		}, 530);
	}
});
