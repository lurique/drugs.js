var Drug = Drug || {};

;(function($) {

	Drug.Marijuana = {

		init: function() {
			this.cacheSelectors();
			this.bindEvents();
		},

		cacheSelectors: function() {
			this.$button = $('#marijuana');
			this.$document = $('html, body');
			this.$body = $('body');
			this.$elements = $('*');
		},

		bindEvents: function() {
			this.$button.click(this.Events.slowdownScroll);
			this.$button.click(this.Events.slowdownAnimations);
			this.$button.click(this.Events.blurView);
			this.$button.click(this.Events.addSmoke);
		},

		Events: {
			slowdownScroll: function() {
				var self = Drug.Marijuana;

				if ( window.addEventListener ) {
					window.addEventListener('DOMMouseScroll', wheel, false);
				}

				window.onmousewheel = document.onmousewheel = wheel;

				function wheel(event) {
					var delta = 0;

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
					self.$document.stop().animate({
						scrollTop: $(window).scrollTop() - (500 * delta)
					}, 8000);
				}
			},

			slowdownAnimations: function() {
				var self = Drug.Marijuana;

				self.$elements.css('transition', 'all 8s ease');
			},

			blurView: function() {
				var self = Drug.Marijuana;

				self.$body.css('filter', 'blur(0.5px)');
			},

			addSmoke: function() {
				console.log('Cheguei até aqui');
			}
		}

	}

})(jQuery);