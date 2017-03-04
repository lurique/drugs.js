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
			this.$elements = this.$body.find('*');
			this.$smoke = this.$body.find('.smoke');
		},

		bindEvents: function() {
			this.$button.click(this.Events.slowdownScroll);
			this.$button.click(this.Events.addSmoke);
			this.$button.click(this.Events.slowdownAnimations);
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

			addSmoke: function() {
				var self = Drug.Marijuana;

				self.$body.append('<div class="smoke"></div>');
				self.$body.find('.smoke').css('opacity', '0.85');
				self.$body.find('*').css('filter', 'blur(0.5px)');
			},
			
			slowdownAnimations: function() {
				var self = Drug.Marijuana;

				self.$elements.css('transition', 'all 8s ease');
			}

		}

	}

})(jQuery);