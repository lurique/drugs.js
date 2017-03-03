var Drug = Drug || {};

;(function($) {

	Drug.Marijuana = {
		init: () => {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: () => {
			this.$button = $('#marijuana');
			this.$document = $('html, body');
		},

		bindEvents: () => {
			this.$button.click(this.Events.slowdownScroll);
			this.$button.click(this.Events.addSmoke);
		},

		Events: {
			slowdownScroll: () => {
				if ( window.addEventListener ) {
					window.addEventListener('DOMMouseScroll', wheel, false);
				}

				window.onmousewheel = document.onmousewheel = wheel;

				function wheel(event) {
					let delta = 0;

					if ( event.wheelDelta ) {
						delta = event.wheelDelta / 120;
					} else if ( event.detail ) {
						delta = -event.detail / 3;
					}

					handle(delta);

					if ( event.preventDefault ) {
						event.preventDefault();
					}

					event.returnValue = false;
				}

				function handle(delta) {
					this.$document.stop().animate({
						scrollTop: $(window).scrollTop() - (500 * delta)
					}, 8000);
				}
			},

			addSmoke: () => {
				console.log('Hello');
			}
		}
	}

})(jQuery);