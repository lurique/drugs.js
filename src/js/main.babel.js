var Drug = Drug || {};

;(function($) {

	Drug.Main = {
		
		init: () => {
			this.bindScripts();
		},

		bindScripts: () => {
			let scripts = ['Cocaine', 'Crack', 'Ecstasy', 'Heroine', 'Lsd', 'Marijuana', 'Methanfetamine'];

			for ( let i = 0; i < scripts.length; i++ ) {
				console.log(scripts[i]);
			}
		}

	}

	document.addEventListener('DOMContentLoaded', (event) => {
		Drug.Main.init();
	});

})(jQuery);