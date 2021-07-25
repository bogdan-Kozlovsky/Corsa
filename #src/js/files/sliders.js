//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_about = new Swiper('.slider__items', {
	observer: true,
	observeParents: true,
	autoHeight: true,
	speed: 800,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		400: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		600: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		700: {
			slidesPerView: 4,
			spaceBetween: 15
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});
let sliderSlider = new Swiper('.systems__slider', {
	speed: 800,
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.systems__slider-next',
		prevEl: '.systems__slider-prev',
	},
	slideNextClass: '.systems__slider-next',
	slidePrevClass: '.systems__slider-prev',
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: 'true',
	},
});
let sliderBig = new Swiper('.systems-descr__big-slider', {
	speed: 800,
	loop: true,
	slidesPerView: 1,

	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.systems-descr__mini-slider',
			slidesPerView: 5,
		}
	},
	navigation: {
		nextEl: '.systems-descr__slider-next',
		prevEl: '.systems-descr__slider-prev',
	},
});