var Drug = Drug || {};

;(function($) {

	Drug.Main = {

		init: function() {
			this.bindScripts();
		},

		bindScripts: function() {
			var scripts = ['Marijuana'];

			for ( var i = 0; i < scripts.length; i++ ) {
				Drug[scripts[i]].init();
			}
		}

	}

	document.addEventListener('DOMContentLoaded', function(event) {
		Drug.Main.init();
	});

})(jQuery);